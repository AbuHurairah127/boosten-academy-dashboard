import { auth, db } from "./../../config/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDocs,
  getDoc,
  deleteDoc,
  where,
  query,
  collection,
} from "firebase/firestore/lite";
import {
  LOGIN,
  LOGOUT,
  FETCH_STUDENT,
  DELETE_STUDENTS,
} from "../types/constants";
export const createStudent =
  (data, setButtonLoader, adminSignedIn) => async (dispatch) => {
    try {
      setButtonLoader(true);
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      let userData = user.user;
      updateProfile(userData, {
        displayName: data.name,
      });
      try {
        await setDoc(doc(db, "students", userData.uid), {
          email: data.email,
          password: data.password,
          name: data.name,
          fatherName: data.fName,
          rollNo: data.rollNo,
          studentNum: data.SNum,
          fatherNum: data.FNum,
          DOB: data.DOB,
          address: data.address,
          city: data.city,
          gender: data.gender,
          class: data.class,
          subjects: data.subjects,
          uid: userData.uid,
        });
      } catch (error) {
        window.notify(error.message, "error");
      }
      try {
        await signOut(auth);
        dispatch({
          type: LOGOUT,
        });
      } catch (error) {
        window.notify(error.message, "error");
      }
      try {
        await signInWithEmailAndPassword(
          auth,
          adminSignedIn.email,
          adminSignedIn.password
        );
        dispatch({
          type: LOGIN,
          payload: adminSignedIn,
        });
      } catch (error) {
        window.notify(error.message, "error");
      }
      window.notify("A student has been successfully created.", "success");
    } catch (error) {
      window.notify(error.message, "error");
    } finally {
      setTimeout(() => {
        setButtonLoader(false);
      }, 1500);
    }
  };

export const readSingleStudent =
  (studentId, setFetchLoader) => async (dispatch) => {
    try {
      setFetchLoader(true);
      let array = [];
      const q = query(
        collection(db, "students"),
        where("rollNo", "==", studentId)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        array.push(data);
      });
      if (array.length > 0) {
        dispatch({
          type: FETCH_STUDENT,
          payload: array,
        });
      } else {
        window.notify(
          `You have no students available corresponding to Student Id "${studentId}".Please add via clicking on the button 👈🏻`,
          "info"
        );
      }
    } catch (error) {
      window.notify(error.message, "error");
      console.log(error.message);
    } finally {
      setFetchLoader(false);
    }
  };
export const readClass = (data, setFetchLoader) => async (dispatch) => {
  try {
    setFetchLoader(true);
    let array = [];
    const q = query(
      collection(db, "students"),
      where("class", "==", data.class)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      array.push(data);
    });
    if (array.length > 0) {
      array = array.sort((a, b) => {
        return a.rollNo - b.rollNo;
      });
      dispatch({
        type: FETCH_STUDENT,
        payload: array,
      });
    } else {
      window.notify(
        `You have no students available in this class.Please add via clicking on the button 👈🏻`,
        "info"
      );
    }
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setFetchLoader(false);
  }
};
export const readClassOnSubjects =
  (data, setFetchLoader) => async (dispatch) => {
    try {
      setFetchLoader(true);
      let array = [];
      const q = query(
        collection(db, "students"),
        where("subjects", "==", data.subjects)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        array.push(data);
      });
      if (data.class === "9th" || data.class === "10th") {
        array = array.filter((student) => student.class === data.class);
      }
      if (array.length > 0) {
        array = array.sort((a, b) => {
          return a.rollNo - b.rollNo;
        });
        dispatch({
          type: FETCH_STUDENT,
          payload: array,
        });
      } else {
        window.notify(
          `You have no students available in this class.Please add via clicking on the button 👈🏻`,
          "info"
        );
      }
    } catch (error) {
      window.notify(error.message, "error");
    } finally {
      setFetchLoader(false);
    }
  };
export const deleteStudent = (data, setButtonLoader) => async (dispatch) => {
  try {
    setButtonLoader(true);
    await deleteDoc(doc(db, "students", data));
    await deleteDoc(doc(db, "attendance", data));
    await deleteDoc(doc(db, "marks", data));
    dispatch({
      type: DELETE_STUDENTS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => setButtonLoader(false), 500);
  }
};
export const studentUpdate =
  (data, setButtonLoader, uid) => async (dispatch) => {
    try {
      setButtonLoader(true);
      console.log(data);
      await setDoc(doc(db, "students", uid), {
        name: data.name,
        fatherName: data.fName,
        rollNo: data.rollNo,
        studentNum: data.SNum,
        fatherNum: data.FNum,
        DOB: data.DOB,
        address: data.address,
        city: data.city,
        gender: data.gender,
        class: data.class,
        subjects: data.subjects,
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setButtonLoader(false);
    }
  };
export const whatsappMessage = (uid, fatherNum) => async (dispatch) => {
  try {
    const docRef = doc(db, "marks", uid);
    let docSnap = await getDoc(docRef);
    docSnap = docSnap.data();
    if (docSnap === undefined) {
      window.notify("No result have been uploaded on the portal.", "info");
    } else {
      let marksArray = Object.values(docSnap);

      let subjectsArray = Object.keys(marksArray[0].obtainedMarks);

      marksArray = marksArray.sort((a, b) => b.testNo - a.testNo);
      marksArray.map((mark) => {
        let msgText = `Test No. ${
          mark.testNo
        }%0a ****************** %0a${subjectsArray.map(
          (item) =>
            item +
            ": " +
            mark.obtainedMarks[item] +
            "/" +
            mark.totalMarks[item] +
            "%0a"
        )}`;
        window.open(`https://wa.me/${fatherNum}?text=${msgText}`);
      });
    }
  } catch (error) {
    window.notify(error.message, "error");
  }
};

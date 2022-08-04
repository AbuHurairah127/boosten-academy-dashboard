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
  deleteDoc,
  where,
  query,
  collection,
} from "firebase/firestore/lite";
import { LOGIN, LOGOUT, FETCH_SINGLE_STUDENT } from "../types/constants";
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
          name: data.name,
          fatherName: data.FName,
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
          type: FETCH_SINGLE_STUDENT,
          payload: array,
        });
      } else {
        window.notify(
          `You have no students available for this Student Id "${studentId}".Please add via clicking on the button 👈🏻`,
          "info"
        );
      }
    } catch (error) {
      window.notify(error.message, "error");
    } finally {
      setFetchLoader(false);
    }
  };

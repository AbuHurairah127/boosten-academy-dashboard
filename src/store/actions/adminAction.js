import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./../../config/firebase";
import { FETCH_ALL_ADMINS, LOGIN, LOGOUT } from "../types/constants";
import {
  doc,
  setDoc,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore/lite";

export const addAdmin =
  (data, setLoader, adminSignedIn) => async (dispatch) => {
    try {
      setLoader(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      let userData = userCredential.user;
      updateProfile(userData, {
        displayName: data.name,
      });
      try {
        await setDoc(doc(db, "admins", userData.uid), {
          name: data.name,
          fatherName: data.fatherName,
          address: data.address,
          uid: userData.uid,
          role: data.role,
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
      } finally {
      }
      window.notify("New admin has been created.", "success");
    } catch (error) {
      const errorMessage = error.message;
      window.notify(errorMessage, "error");
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  };
export const readAdmin = (setFetchLoader) => async (dispatch) => {
  try {
    setFetchLoader(true);
    let array = [];
    const q = query(collection(db, "admins"), where("role", "==", "admin"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      array.push(data);
    });
    dispatch({
      type: FETCH_ALL_ADMINS,
      payload: array,
    });
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => setFetchLoader(false), 2500);
  }
};

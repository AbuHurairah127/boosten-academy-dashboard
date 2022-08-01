import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./../../config/firebase";
import { LOGIN, LOGOUT } from "../types/constants";
import { doc, setDoc } from "firebase/firestore/lite";

export const addAdmin =
  (data, setLoader, adminSignedIn, setAddAdminLoader) => async (dispatch) => {
    try {
      setLoader(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      let userData = userCredential.user;
      console.log(userData.uid);
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

      console.log(auth.currentUser);
      console.log(adminSignedIn);
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
        console.log(auth.currentUser);
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

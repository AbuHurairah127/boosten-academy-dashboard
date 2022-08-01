import { LOGIN, LOGOUT } from "../types/constants";
import { auth, db } from "./../../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";

export const login = (data, setIsProcessing) => async (dispatch) => {
  try {
    setIsProcessing(true);
    await signInWithEmailAndPassword(auth, data.email, data.password);
    let user = auth.currentUser;
    console.log(user);
    const docSnap = await getDoc(doc(db, "admins", user.uid));
    let userData = docSnap.data();
    console.log(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    window.notify("User have been successfully signed in", "success");
    if (docSnap.exists()) {
      dispatch({
        type: LOGIN,
        payload: userData,
      });
    }
  } catch (error) {
    const errorMessage = error.message;
    window.notify(errorMessage, "error");
  } finally {
    setIsProcessing(false);
  }
};
export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    window.notify("User have been successfully logged out", "success");
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {}
};
export const fetchUser = (setPreLoader) => async (dispatch) => {
  try {
    setPreLoader(true);
    await auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: LOGIN,
          payload: user,
        });
      }
    });
  } catch (error) {
    window.notify(error.message, "success");
  } finally {
    setTimeout(() => {
      setPreLoader(false);
    }, 2000);
  }
};

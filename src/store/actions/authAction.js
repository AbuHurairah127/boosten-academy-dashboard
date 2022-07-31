import { LOGIN, LOGOUT } from "../types/constants";
import { auth } from "./../../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const login = (data) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const user = userCredential.user;
    console.log(user);
    window.notify("User have been successfully signed in", "success");
    dispatch({
      type: LOGIN,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.message;
    window.notify(errorMessage, "error");
  }
};
export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
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
          // payload: user,
        });
      }
    });
  } catch (error) {
    window.notify(error.message, "success");
  } finally {
    setPreLoader(false);
  }
};

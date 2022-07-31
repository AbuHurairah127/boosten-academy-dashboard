import { LOGIN, LOGOUT } from "../types/constants";
import { auth } from "./../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

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
    const errorCode = error.code;
    const errorMessage = error.message;
    window.notify(errorMessage, "error");
  }
};
export const logout = (data) => {
  return {
    type: LOGOUT,
    payload: data,
  };
};

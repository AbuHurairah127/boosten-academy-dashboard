import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  addDoc,
} from "firebase/firestore/lite";
import { FETCH_CLASS } from "../types/constants";
export const readAllStudents = (setFetchLoader) => async (dispatch) => {
  try {
    setFetchLoader(true);
    let array = [];
    try {
      const q = query(
        collection(db, "students"),
        //   where("subjects", "==", data.subjects)
        orderBy("rollNo")
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        array.push(data);
      });
    } catch (error) {
      console.log(error.message);
    }

    if (array.length > 0) {
      dispatch({
        type: FETCH_CLASS,
        payload: array,
      });
    } else {
      window.notify(
        `You have no students available in this class.Please add.`,
        "info"
      );
    }
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setFetchLoader(false);
  }
};
export const createAttendance = (data, setButtonLoader) => async (dispatch) => {
  try {
    setButtonLoader(true);
    await data.map((todayAttendance) => {
      addDoc(collection(db, "attendance"), todayAttendance);
    });
    window.notify(
      "Attendance has been successfully updated on the portal.",
      "success"
    );
  } catch (error) {
    window.notify(error.message, "error");

    console.log(error.message);
  } finally {
    setButtonLoader(false);
  }
};

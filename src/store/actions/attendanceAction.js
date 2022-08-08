import { db } from "../../config/firebase";
import {
  collection,
  where,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore/lite";
import { FETCH_CLASS } from "../types/constants";
export const readClassOnSubjects = (setFetchLoader) => async (dispatch) => {
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

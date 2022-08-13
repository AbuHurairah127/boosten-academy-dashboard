import { query, collection, where, getDocs } from "firebase/firestore/lite";
import { FETCH_STUDENT } from "./../types/constants";
import { db } from "./../../config/firebase";
export const fetchClassSubjectsSpecified =
  (data, setFetchLoader) => async (dispatch) => {
    try {
      setFetchLoader(true);
      let array = [];
      const q = query(
        collection(db, "students"),
        where("subjects", "==", data.subjects)
      );
      let subjects = JSON.parse(data.subjects);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        array.push(data);
      });
      if (data.class === "9th" || data.class === "10th") {
        array = array.filter((student) => student.class === data.class);
      }
      let students = {
        studentsSubjects: subjects,
        studentsArray: array,
      };
      if (array.length > 0) {
        dispatch({
          type: FETCH_STUDENT,
          payload: students,
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

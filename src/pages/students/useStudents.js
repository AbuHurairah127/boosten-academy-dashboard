import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  readSingleStudent,
  readClass,
  readClassOnSubjects,
  deleteStudent,
  whatsappMessage,
} from "./../../store/actions/studentAction";
import { useFormik } from "formik";
import * as yup from "yup";
import { UPDATE_STUDENT } from "../../store/types/constants";
const useStudents = () => {
  const [fetchStudentRollNo, setFetchStudentRollNo] = useState("");
  const [fetchLoader, setFetchLoader] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      class: "",
      subjects: "",
    },
    validationSchema: yup.object({
      class: yup.string().min(3).required("Required"),
    }),
    onSubmit: (values) => {
      if (values.class !== "" && values.subjects === "") {
        dispatch(readClass(values, setFetchLoader));
      } else if (values.subjects !== "") {
        dispatch(readClassOnSubjects(values, setFetchLoader));
      } else {
        window.notify(
          "Please! Select a class and relevant subjects to that class.",
          "warning"
        );
      }
      values.class = "";
      values.subjects = "";
    },
  });
  const fetchSingleStudent = (studentID) => {
    setFetchStudentRollNo(parseInt(studentID));
    if (studentID !== "") {
      dispatch(readSingleStudent(parseInt(fetchStudentRollNo), setFetchLoader));
    } else {
      window.notify(
        "Please Enter Student's Roll number to get the student.",
        "warning"
      );
    }
    setFetchStudentRollNo("");
  };
  const onDeleteHandler = (studentID) => {
    dispatch(deleteStudent(studentID, setButtonLoader));
  };
  const onUpdateHandler = (student) => {
    dispatch({ type: UPDATE_STUDENT, payload: student });
  };
  const sendWhatsappMessage = (uid, fatherNum) => {
    dispatch(whatsappMessage(uid, fatherNum));
  };
  return {
    fetchStudentRollNo,
    setFetchStudentRollNo,
    fetchLoader,
    fetchSingleStudent,
    onDeleteHandler,
    formik,
    buttonLoader,
    onUpdateHandler,
    sendWhatsappMessage,
  };
};

export default useStudents;

import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchClassSubjectsSpecified } from "./../../store/actions/marksAction";
const useAddMarks = () => {
  const [fetchLoader, setFetchLoader] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector(
    (store) => store.marksReducer.studentsToAddMarks
  );
  const [studentsList, setStudentsList] = useState([]);
  useEffect(() => {
    setStudentsList(students);
  }, [students]);
  const subjectsList = useSelector((store) => store.marksReducer.subjects);
  let subjectsObject = {};
  let totalMarks = {};
  const updateObject = (object, key, value) => {
    object[key] = value || "";
  };
  useEffect(() => {
    subjectsList.forEach((subject) => {
      updateObject(subjectsObject, subject);
    });
    totalMarks = subjectsObject;
  }, [subjectsList]);
  const onChangeHandlerForTotalMarks = (e) => {
    totalMarks = { ...totalMarks, [e.target.name]: e.target.value };
  };

  const formik = useFormik({
    initialValues: {
      class: "",
      subjects: "",
    },
    validationSchema: yup.object({
      class: yup.string().min(3).required("Required"),
    }),
    onSubmit: (values) => {
      if (values.class !== "" && values.subjects !== "") {
        dispatch(fetchClassSubjectsSpecified(values, setFetchLoader));
      } else {
        window.notify(
          "Please! Select a class and relevant subjects to that class.",
          "warning"
        );
      }
      values.class = "";
      values.subjects = "";
    },
    onReset: (values) => {
      values.class = "";
      values.subjects = "";
    },
  });
  return {
    formik,
    fetchLoader,
    studentsList,
    subjectsList,
    onChangeHandlerForTotalMarks,
  };
};

export default useAddMarks;

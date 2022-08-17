import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchClassSubjectsSpecified } from "./../../store/actions/marksAction";
const useAddMarks = () => {
  const [fetchLoader, setFetchLoader] = useState(false);
  const dispatch = useDispatch();
  //Fetching data from store
  const students = useSelector(
    (store) => store.marksReducer.studentsToAddMarks
  );
  const subjectsList = useSelector((store) => store.marksReducer.subjects);
  // Creating required Variables
  const [studentsList, setStudentsList] = useState([]);
  let subjectsObject = {};
  let totalMarks = {};
  let obtainedMarks = {};
  // let obtainedMarksList = [];

  /**
   * It takes an object, a key, and a value, and sets the value of the key in the object to the value.
   * @param object - The object you want to update
   * @param key - The key of the object you want to update.
   * @param value - The value to be updated.
   */
  const updateObject = (object, key, value) => {
    object[key] = value || 0;
  };
  useEffect(() => {
    setStudentsList(students);
  }, [students]);
  useEffect(() => {
    subjectsList.forEach((subject) => {
      updateObject(subjectsObject, subject);
    });
    totalMarks = subjectsObject;
    console.log(
      "🚀 ~ file: useAddMarks.js ~ line 38 ~ useEffect ~ totalMarks",
      totalMarks
    );
    obtainedMarks = subjectsObject;
    console.log(
      "🚀 ~ file: useAddMarks.js ~ line 40 ~ useEffect ~ obtainedMarks",
      obtainedMarks
    );
    const obtainedMarksList = students.map(() => {
      return obtainedMarks;
    });
    console.log(
      obtainedMarksList,
      obtainedMarksList.length,
      "obtainedMarksList"
    );
  }, [subjectsList]);
  const onChangeHandlerForTotalMarks = (e) => {
    totalMarks = { ...totalMarks, [e.target.name]: parseInt(e.target.value) };
    console.log(
      "🚀 ~ file: useAddMarks.js ~ line 58 ~ onChangeHandlerForTotalMarks ~ totalMarks",
      totalMarks
    );
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

import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchClassSubjectsSpecified } from "./../../store/actions/marksAction";
const useAddMarks = () => {
  const [fetchLoader, setFetchLoader] = useState(false);
  const dispatch = useDispatch();
  const studentsList = useSelector(
    (store) => store.marksReducer.studentsToAddMarks
  );
  const subjectsList = useSelector((store) => store.marksReducer.subjects);
  let subjectsObject = subjectsList.map((subject) => {
    return { subject: `${subject}` };
  });
  const onChangeHandlerForTotalMarks = (e, index) => {
    const totalMarks = subjectsObject.map((subject, i) =>
      index === i
        ? Object.assign(subject, { TotalMarks: e.target.value })
        : subject
    );
  };
  const onChangeHandlerForObtainedMarks = (e, INDEX, i) => {
    const obtainedMarksList = studentsList.map((student, index) => {
      if (INDEX === index) {
        const obtainedMarks = subjectsObject.map((subject, I) =>
          I === i
            ? Object.assign(subject, { obtainedMarks: e.target.value })
            : subject
        );
        Object.assign(student, { obtainedMarks });
        console.log(student, "if");
        return student;
      } else {
        console.log(student, "else");
        return student;
      }
    });
    console.log(obtainedMarksList);
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
    onChangeHandlerForObtainedMarks,
  };
};

export default useAddMarks;

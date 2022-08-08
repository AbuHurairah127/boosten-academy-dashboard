import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { readClassOnSubjects } from "../../store/actions/attendanceAction";
import { useSelector } from "react-redux";
const useMarkAttendance = () => {
  const [fetchLoader, setFetchLoader] = useState(false);
  const students = useSelector((store) => store.attendanceReducer.studentsList);
  const [attendance, setAttendance] = useState({
    rollNo: "",
    attendanceStatus: "",
    date: "",
  });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      class: "",
      subjects: "",
    },
    validationSchema: yup.object({
      class: yup.string().min(3).required("Required"),
      subjects: yup.string().min(3).required("Required"),
    }),
    onSubmit: (values) => {
      if ((values.subjects !== "", values.class !== "")) {
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
  return { formik, fetchLoader, students };
};

export default useMarkAttendance;

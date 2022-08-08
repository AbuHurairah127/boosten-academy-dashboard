import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { readClassOnSubjects } from "../../store/actions/attendanceAction";
import { useSelector } from "react-redux";
const useMarkAttendance = () => {
  const [fetchLoader, setFetchLoader] = useState(false);
  const students = useSelector((store) => store.attendanceReducer.studentsList);
  const [today, setToday] = useState(new Date());
  const [attendance, setAttendance] = useState({
    rollNo: "",
    attendanceStatus: "",
    date: "",
  });
  const dispatch = useDispatch();
  const fetchStudents = () => {
    dispatch(readClassOnSubjects(setFetchLoader));
  };
  return {
    fetchLoader,
    students,
    attendance,
    today,
    fetchStudents,
    setToday,
  };
};

export default useMarkAttendance;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { readSingleStudent } from "./../../store/actions/studentAction";

const useStudents = () => {
  const [fetchStudentRollNo, setFetchStudentRollNo] = useState("");
  const [fetchLoader, setFetchLoader] = useState(false);
  const dispatch = useDispatch();
  const fetchSingleStudent = (studentID) => {
    if (fetchStudentRollNo !== "") {
      dispatch(readSingleStudent(studentID, setFetchLoader));
    } else {
      window.notify(
        "Please Enter Student's Roll number to get the student.",
        "warning"
      );
    }
  };
  return {
    fetchStudentRollNo,
    setFetchStudentRollNo,
    fetchLoader,
    fetchSingleStudent,
  };
};

export default useStudents;

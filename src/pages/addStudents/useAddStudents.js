import { useState } from "react";
const useAddStudents = () => {
  const [student, setStudent] = useState({});
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  return { handleChange };
};

export default useAddStudents;

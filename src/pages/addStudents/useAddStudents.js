import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const useAddStudents = () => {
  const [student, setStudent] = useState({});
  const formik = useFormik({
    initialValues: {
      name: "",
      FName: "",
      rollNo: "",
      SNum: "",
      FNum: "",
      DOB: "",
      address: "",
      city: "",
      gender: "",
      class: "",
      subjects: [],
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .max(25, "Too Long")
        .min(3, "Too Short")
        .required("Required"),
      phone: yup
        .number()
        .min(923000000000, "Too Short")
        .max(923500000000, "Too Long")
        .required("Required"),
      dob: yup.date().required("Required"),
    }),
    onSubmit: (values) => {},
  });
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  return { handleChange, formik };
};

export default useAddStudents;

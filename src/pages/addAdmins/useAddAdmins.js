import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
const useAddAdmins = () => {
  const [passwordAppearance, setPasswordAppearance] = useState(false);
  const [cPasswordAppearance, setCPasswordAppearance] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      fatherName: "",
      address: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Email is invalid").required("Required"),
      password: yup
        .string()
        .min(8, "Password must be of minimum 8 characters")
        .required("Required"),
      confirmPassword: yup
        .string()
        .min(8, "Password must be of minimum 8 characters")
        .required("Required"),
      name: yup
        .string()
        .min(3, "Name must be of at least 3 characters.")
        .required("Required"),
      fatherName: yup
        .string()
        .min(3, "Father name must be of at least 3 characters.")
        .required("Required"),

      address: yup
        .string()
        .min(20, "address must contain at least 20 characters.")
        .required("Required"),
    }),
  });
  return {
    formik,
    passwordAppearance,
    setPasswordAppearance,
    cPasswordAppearance,
    setCPasswordAppearance,
  };
};

export default useAddAdmins;

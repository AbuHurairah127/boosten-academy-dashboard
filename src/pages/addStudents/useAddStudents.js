import { useFormik } from "formik";
import * as yup from "yup";
const useAddStudents = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      FName: "",
      rollNo: "",
      SNum: "",
      FNum: "",
      DOB: new Date(),
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
      FName: yup
        .string()
        .max(25, "Too Long")
        .min(3, "Too Short")
        .required("Required"),
      rollNo: yup.number().min(22000, "Too Short").required("Required"),
      SNum: yup
        .number()
        .min(923000000000, "Too Short")
        .max(923500000000, "Too Long")
        .required("Required"),
      FNum: yup
        .number()
        .min(923000000000, "Phone Number Pattern :'923336584571'")
        .max(923500000000, "Phone Number Pattern :'923336584571'")
        .required("Required"),
      DOB: yup.date().required("Required"),
      address: yup.string().required("Required"),
      city: yup.string().min(6, "Too Short").required("Required"),
      gender: yup.string().min(4).required("Required"),
      class: yup.string().min(3).required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
};

export default useAddStudents;

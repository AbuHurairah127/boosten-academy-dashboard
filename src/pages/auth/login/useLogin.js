import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../../../store/actions/authAction";

const useLogin = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().email("Email is invalid.").required("Required"),
      password: yup
        .string()
        .min(8, "Password must be at least of 8 characters.")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  return { formik };
};

export default useLogin;

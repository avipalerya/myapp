import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(24).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(4).required("Please enter the Password"),
  confirmPassword: Yup.string()
    .required("Please enter the correct password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

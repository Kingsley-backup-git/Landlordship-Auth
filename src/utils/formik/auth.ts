"use client";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/store/useAuthStore";
import { AuthInitialValues } from "@/types/auth/formik";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function AuthValidation(handleLoader: (val: boolean) => void) {
  const { push } = useRouter();
  const email = useAuthStore((state) => state.resetEmail);
  const { doRegister } = useAuth(handleLoader, push);
  const { doLogin } = useAuth(handleLoader, push);
  const { doResetPassword } = useAuth(handleLoader, push);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const validationSchemaLogin = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const validationSchemaReset = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const authFormik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema,
    onSubmit: (values: AuthInitialValues) => {
      doRegister(values);
    },
  });

  const loginFormik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchemaLogin,
    onSubmit: (values: AuthInitialValues) => {
      doLogin(values);
    },
  });

  const resetFormik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: validationSchemaReset,
    onSubmit: (values: AuthInitialValues) => {
      doResetPassword({
        resetEmail: email,
        password: values.password as string,
      });
    },
  });

  return {
    authFormik,
    loginFormik,
    resetFormik,
  };
}

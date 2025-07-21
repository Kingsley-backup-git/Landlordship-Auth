import { AuthInitialValues } from "@/types/auth/formik";
import { authInstance, baseInstance } from "@/utils/axios";

export class AuthService {
  constructor() {}

  /**
   *
   * @param values The registration form values. email, password.
   * @returns The newly registered user data
   */
  register = async (values: AuthInitialValues) => {
    try {
      const res = await authInstance.post("/api/auth/register", values);
      console.log(res);
      return res;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error);
    }
  };
  login = async (values: AuthInitialValues) => {
    try {
      const res = await authInstance.post("/api/auth/login", values);
      return res;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };

  /**
   *
   * @param email The email address to reset the password
   * @returns True if the request is successful
   */
  forgotPassword = async (values: AuthInitialValues) => {
    try {
      const res = await authInstance.post("/api/auth/forgot-password", {
        email: values.email,
      });
      console.log(res);
      return true;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };

  /**
   *
   * @param password The new valid password
   * @returns The user data or successful reset message
   */
  resetPassword = async (values: { resetEmail: string; password: string }) => {
    try {
      const res = await baseInstance.post("/api/auth/reset-password", {
        email: values.resetEmail,
        password: values.password,
      });

      return res;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error);
    }
  };

  validateOTP = async (values: { email: string; otp: string }) => {
    try {
      const res = await authInstance.post("/api/auth/validate-otp", {
        email: values.email,
        otp: values.otp,
      });
      return res;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };
}

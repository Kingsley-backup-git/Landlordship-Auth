import { AuthService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { AuthInitialValues } from "@/types/auth/formik";
import { useRouter } from "next/navigation";

type setupRouter = ReturnType<typeof useRouter>;
export function useAuth(
  handleLoader: (val: boolean) => void,
  push: setupRouter["push"]
) {
  const RegisterMutation = useMutation({
    mutationFn: async (values: AuthInitialValues) => {
      return await new AuthService().register(values);
    },
    onMutate: () => {
      toast.loading("Request loading", { toastId: "register" });
      handleLoader(true);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      toast.dismiss("register");

     

      Cookies.set("token", data?.accessToken, { expires: 7, secure: true });

      toast.success(`Welcome ${data?.email}`, { autoClose: 3000 });
      handleLoader(false);
      push("/dashboard/overview");
    },
    onError: (error) => {
      toast.dismiss("register");

      toast.error(error?.message, { autoClose: 3000 });
      handleLoader(false);
    },
  });

  const LoginMutation = useMutation({
    mutationFn: async (values: AuthInitialValues) => {
      return await new AuthService().login(values);
    },
    onMutate: () => {
      toast.loading("Request loading", { toastId: "login" });
      handleLoader(true);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      toast.dismiss("login");
    
      Cookies.set("token", data?.accessToken, { expires: 7, secure: true });
      toast.success(`Successfully Logged In`, { autoClose: 3000 });
      handleLoader(false);
      // If the user was trying to access a protected page, send them back there.
      // Falls back to the existing default route to avoid breaking current behavior.
  

      push("/dashboard/overview");
    },
    onError: (error) => {
      toast.dismiss("login");

      toast.error(error?.message, { autoClose: 3000 });
      handleLoader(false);
    },
  });

  const ForgotPasswordMutation = useMutation({
    mutationFn: async (values: AuthInitialValues) => {
      return await new AuthService().forgotPassword(values);
    },
    onMutate: () => {
      toast.loading("Request loading", { toastId: "forgot-password" });
      handleLoader(true);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      toast.dismiss("forgot-password");

      console.log(data);
      toast.success(`Otp has been sent to your Email`, { autoClose: 3000 });
      handleLoader(false);
    },
    onError: (error) => {
      toast.dismiss("forgot-password");

      toast.error(error?.message, { autoClose: 3000 });
      handleLoader(false);
    },
  });

  const ValidateOTPMutation = useMutation({
    mutationFn: (values: { email: string; otp: string }) => {
      return new AuthService().validateOTP(values);
    },
    onMutate: () => {
      handleLoader(true);
      toast.loading("Request loading...", { toastId: "loadingId" });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      toast.dismiss("loadingId");
      toast.success("Successfully validated OTP");
      Cookies.set("resetToken", data?.resetToken, { expires: 7, secure: true });
      handleLoader(false);
      push("/auth/reset");
    },
    onError(error) {
      toast.dismiss("loadingId");
      handleLoader(false);
      toast.error(error?.message);
    },
  });

  // Reset Password
  const ResetPasswordMutation = useMutation({
    mutationFn: (values: { resetEmail: string; password: string }) => {
      return new AuthService().resetPassword(values);
    },
    onMutate: () => {
      handleLoader(true);
      toast.loading("Request loading...", { toastId: "reset" });
    },
    onSuccess: () => {
      toast.dismiss("reset");
      Cookies.remove("resetToken");
      toast.success("Password changed successfully");
      handleLoader(false);
      push("/auth/signin");
    },
    onError: (error) => {
      toast.dismiss("reset");
      handleLoader(false);

      toast.error(error?.message, { autoClose: 3000 });
    },
  });

  const doRegister = async (values: AuthInitialValues) => {
    RegisterMutation.mutateAsync(values);
  };

  const doLogin = async (values: AuthInitialValues) => {
    LoginMutation.mutateAsync(values);
  };

  const doForgotPassword = async (values: AuthInitialValues) => {
    ForgotPasswordMutation.mutateAsync(values);
  };

  const ValidateOTP = async (values: { email: string; otp: string }) => {
    await ValidateOTPMutation.mutateAsync(values);
  };

  const doResetPassword = async (values: {
    resetEmail: string;
    password: string;
  }) => {
    await ResetPasswordMutation.mutateAsync(values);
  };

  return {
    RegisterMutation,
    doRegister,
    LoginMutation,
    doLogin,
    ForgotPasswordMutation,
    doForgotPassword,
    ValidateOTPMutation,
    ValidateOTP,
    doResetPassword,
    ResetPasswordMutation,
  };
}

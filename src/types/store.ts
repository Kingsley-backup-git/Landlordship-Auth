export type authStateTypes = {
  email: string;
  resetEmail: string;
  otp: string;
};
export type UserStateTypes = {
  type: string;
};

export type UserActionsTypes = {
  setType: (val: string) => void;
};
export type authActionsTypes = {
  setRegisteredEmail: (val: string) => void;
  setResetEmail: (val: string) => void;
  setOtp: (val: string) => void;
};

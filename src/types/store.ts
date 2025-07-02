export type authStateTypes = {
    email: string;
    resetEmail: string
    otp: string;
}
export type authActionsTypes = {
    setRegisteredEmail: (val: string) => void
    setResetEmail : (val:string)=>void
    setOtp: (val: string) => void;
}
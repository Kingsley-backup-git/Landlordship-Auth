
import { authActionsTypes, authStateTypes} from '../types/store'

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
const initialState: authStateTypes = {
    email: '',
    resetEmail : '',
    otp: '',
}

export const useAuthStore = create<authStateTypes & authActionsTypes>()(devtools(persist((set) => ({
    ...initialState,
    setRegisteredEmail: (val) => set(() => ({ email: val })),
    setResetEmail: (val) => set(() => ({ resetEmail: val })),
    setOtp: (otp) => set(() => ({ otp })),
   

}), {
    name: 'auth',
}), {
    enabled: true,
    name: 'auth',
}))
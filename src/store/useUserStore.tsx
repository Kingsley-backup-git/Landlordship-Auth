import { UserActionsTypes, UserStateTypes } from "../types/store";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState: UserStateTypes = {
  type: "landlord",
};

export const useUserStore = create<UserStateTypes & UserActionsTypes>()(
  devtools(
    (set) => ({
      ...initialState,

      setType: (val) => set(() => ({ type: val })),
    }),
    {
      enabled: true,
      name: "user",
    },
  )
);
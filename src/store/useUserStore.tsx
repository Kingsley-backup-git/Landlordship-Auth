import { UserActionsTypes, UserStateTypes } from "../types/store";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const initialState: UserStateTypes = {
  type: "tenant",
};

export const useUserStore = create<UserStateTypes & UserActionsTypes>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setType: (val) => set(() => ({ type: val })),
      }),
      {
        name: "user",
      },
    ),
    {
      enabled: true,
      name: "user",
    },
  ),
);

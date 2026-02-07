import { userInstance } from "@/utils/axios";

export class UserService {
  getUser = async () => {
    try {
      const res = await userInstance.get("/api/auth/me");
      return res;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error);
    }
  };
  updateAcc = async (values: { type: string }) => {
    try {
      const res = await userInstance.patch("/api/auth/profile-setup", {role : values.type});
      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error);
    }
  };
}

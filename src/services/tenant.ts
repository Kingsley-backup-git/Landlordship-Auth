import { authInstance, userInstance } from "@/utils/axios";

export class TenantService {
  getInvite = async (value: string) => {
    try {
      const res = await authInstance.post("api/tenant/getinvite", {
        token: value,
      });
      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };

  acceptInvite = async (value: string) => {
    try {
      const res = await authInstance.post("api/tenant/acceptinvite", {
        token: value,
      });
      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };

  getTenant = async () => {
    try {
      const res = await userInstance.get("api/tenant/");
      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };


   getAllTenant = async () => {
    try {
      const res = await userInstance.get("api/tenant/alltenants");
      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };
}

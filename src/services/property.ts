import { InterestProps } from "@/types/auth/formik";
import { InviteProps } from "@/types/tenant/props";
import { authInstance, userInstance } from "@/utils/axios";

export class PropertyService {
  createProperty = async (values: FormData) => {
    try {
      const res = await userInstance.post("api/property/create", values, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error?.error);
      throw Error(error?.error);
    }
  };

  getAllProperties = async () => {
    try {
      const res = await userInstance.get("api/property/all");

      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };

    getPublicProperties = async (slug: string) => {
    try {
      const res = await authInstance.get(`api/property/${slug}`);

      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
    };
  
    getEachUserProperties = async (propertyId: string) => {
    try {
      const res = await userInstance.get(`api/property/user/id/${propertyId}`);

      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };
  
     getEachProperties = async (propertyId: string) => {
    try {
      const res = await authInstance.get(`api/property/id/${propertyId}`);

      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };

  getPaginatedProperties = async (
    page: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await userInstance.get<any>(
        `api/property/search?page=${page}&limit=${5}`,
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return res?.data as unknown as any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  }

  interstApplication = async(values:InterestProps) => {
    try {
      const res = await authInstance.post(`/api/interest/apply/${values.id}`,
        {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          moveInDate: values.moveInDate,
          phone: values.phone
        })
      return res?.data
    }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
      throw new Error(error?.error)
    }
  
    
  }
  
    getInterests = async(values : string) => {
    try {
      const res = await userInstance.get(`/api/interest/${values}`)
      return res?.data
    }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
      throw new Error(error?.error)
    }
  
    
}

  sendInvite = async (values: InviteProps) => {
    try {
      const res = await userInstance.post(`api/tenant/invite/${values.id}`, {
        email: values.email,
      });
      console.log(res);
      return res;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw Error(error?.error);
    }
  };
}

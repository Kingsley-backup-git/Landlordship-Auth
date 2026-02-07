import { authInstance, userInstance } from "@/utils/axios"

export class ApplicationService {
    applyForPropery = async (values: FormData) => {
        try {
            
            const res = await userInstance.post("/api/application/apply", values, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            return res?.data
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            throw new Error(error?.error)
        }
    };


        getApplications = async (id:string) => {
        try {
            
            const res = await userInstance.get(`/api/application/${id}`)
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
           
            throw new Error(error?.error)
    }
}

    updateApplication = async(values: { applicationId: string;  status : string} ) => {
        try {
            const res = await userInstance.patch(`/api/application/${values.applicationId}/status`, {status : values.status})
            
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            throw new Error(error?.error)
        }
    }
    
}
import { authInstance, userInstance } from "@/utils/axios"

export class ApplicationService {
    applyForPropery = async (values: FormData) => {
        try {
            
            const res = await authInstance.post("/api/application/apply", values, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            return res?.data
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            throw (error?.error)
        }
    };


        getApplications = async (id:string) => {
        try {
            
            const res = await userInstance.get(`/api/application/${id}`)
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
           
            throw(error?.error)
    }
}
    
}
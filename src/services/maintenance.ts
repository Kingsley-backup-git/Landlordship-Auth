import { userInstance } from "@/utils/axios"

export class MaintenanceService {
    createRequest = async (values:FormData) => {
        try {
            const res = await userInstance.post("/api/maintenance/request/create", values, { headers: { 'Content-Type': "multipart/form-data" } })
            return res?.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error:any) {
throw Error(error?.error)
        }
     
    }

     getRequest = async () => {
        try {
            const res = await userInstance.get("/api/maintenance/requests")
            return res?.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error:any) {
throw Error(error?.error)
        }
     
    }
}
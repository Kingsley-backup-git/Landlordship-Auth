import { userInstance } from "@/utils/axios"

export class MaintenanceService {
    createRequest = async (values:FormData) => {
        try {
            const res = await userInstance.post("/api/maintenance-request/", values, { headers: { 'Content-Type': "multipart/form-data" } })
            return res?.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error:any) {
throw Error(error?.error)
        }
     
    }

     getLandlordRequests = async () => {
        try {
            const res = await userInstance.get("/api/maintenance-request/landlord")
            return res?.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error:any) {
throw Error(error?.error)
        }
     
     }
    
        getEachRequests = async (requestId:string) => {
        try {
            const res = await userInstance.get(`/api/maintenance-request/${requestId}`)
            return res?.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error:any) {
throw Error(error?.error)
        }
     
    }

       acceptRequestStatus = async (requestId:string) => {
        try {
            const res = await userInstance.patch(`/api/maintenance/${requestId}/accept`)
            return res?.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error:any) {
throw Error(error?.error)
        }
     
       }
    
        rejectRequestStatus = async (requestId:string) => {
        try {
            const res = await userInstance.patch(`/api/maintenance/${requestId}/reject`)
            return res?.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error:any) {
throw Error(error?.error)
        }
     
    }
}
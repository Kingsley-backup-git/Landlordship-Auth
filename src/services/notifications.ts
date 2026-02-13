/* eslint-disable @typescript-eslint/no-explicit-any */
import { userInstance } from "@/utils/axios"

export class NotificationServices {
    getNotifications = async () => {
        try {
const res =  await userInstance.get("/api/notifications/")
return res?.data
        } catch (error:any) {
            throw new Error(error?.error)
        }
       
    }
}
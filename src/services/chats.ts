import { userInstance } from "@/utils/axios"

export class ChatService{
    getMessages = async (chatId: string) => {
        try {
            const res = await userInstance.get(`/api/message/${chatId}`)
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
              throw new Error(error?.error)
        }
    };
    getChatList = async () => {
        try {
            const res = await userInstance.get(`/api/chat/`)
            return res?.data
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            throw new Error(error?.error)
        }
    };

       getEachChat = async (chatId:string) => {
        try {
            const res = await userInstance.get(`/api/chat/${chatId}`)
            return res?.data
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            throw new Error(error?.error)
        }
    };
       createOrGetChat= async (values: {otherUserId:string; context:{type:string}}) => {
        
           try {
             
              const res = await userInstance.post(`/api/chat/get-or-create`, {...values})
             
              return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            throw new Error(error?.error)
        }
    }
}
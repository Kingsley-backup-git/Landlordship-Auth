'use client'
import { ChatService } from "@/services/chats"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function useCreateOrGetChat() {
    const router = useRouter()
    const mutation = useMutation({
        mutationFn: async (values: { otherUserId: string; context:{type:string} }) => {
            return await new ChatService().createOrGetChat(values)
        },
        onMutate: () => {
            toast.loading("Loading chat...", {toastId: "chat"})
        },
        onSuccess(data) {
toast.dismiss("chat")
            toast.success("Successful")
            router.push("/dashboard/messages")
return data
        },
        onError(error) {
            toast.dismiss("chat")
              toast.error(error?.message)
throw new Error(error?.message)
        }
    })
   async function createChatHandler(values:{ otherUserId: string;  context:{type:string} }) {
    return mutation.mutateAsync(values)
}
    return {
        mutation,
        createChatHandler
    }


}
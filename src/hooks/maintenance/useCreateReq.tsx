import {  MaintenanceService } from "@/services/maintenance"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

const CreateRequest = (stepHandler: (num: number) => void) => {
    const createReqMutation = useMutation({
        mutationFn: async (values:FormData) => {
            return await new MaintenanceService().createRequest(values)
        },
        onMutate: () => {
            toast.loading("Create Request",{toastId : "createReq"})
        },
        onSuccess : (data)=> {
            console.log(data)
            toast.dismiss("createReq")
            toast.success("Successfully created request")
            stepHandler(7)
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
              toast.dismiss("createReq")
         toast.error(error?.message)
        }
    })

    const CreateRequestHandler = async (values:FormData) => {
        await createReqMutation.mutateAsync(values)
    }

    return {
        CreateRequestHandler,
        createReqMutation
    }
}

export default CreateRequest
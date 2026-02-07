import {  MaintenanceService } from "@/services/maintenance"
import { useMutation } from "@tanstack/react-query"
import { SetStateAction } from "react"
import { toast } from "react-toastify"

const GetEachRequests = (openHandler: (val : boolean)=> void) => {
    const getReqMutation = useMutation({
        mutationFn: async (values:string) => {
            return await new MaintenanceService().getEachRequests(values)
        },
        onMutate: () => {
            toast.loading("getting Request",{toastId : "getReq"})
        },
        onSuccess : (data)=> {
            console.log(data)
            toast.dismiss("getReq")
            toast.success("Successful")
            openHandler(true)
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
              toast.dismiss("getReq")
         toast.error(error?.message)
        }
    })

    const getRequestHandler = async (values:string) => {
        await getReqMutation.mutateAsync(values)
    }

    return {
        getRequestHandler,
        getReqMutation
    }
}

export default GetEachRequests
import { ApplicationService } from "@/services/application"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify";

const useUpdateApplication = () => {
    const updateApplicationMutation = useMutation({
        mutationFn : async (values: { applicationId: string;  status : string}) => {
        return await new ApplicationService().updateApplication(values)
        },
        onMutate: () => {
            toast.loading("Updating Application", {toastId : "update"})
        },
        onSuccess: (data) => {
         
            toast.dismiss("update")
            toast.success("Update successful")
               return data
        },
        onError: (error) => {
            toast.dismiss("update")
                toast.error(error?.message)
        }
    })

    async function handleUpdateApplication(values:  { applicationId: string;  status : string}) {
        return await updateApplicationMutation.mutateAsync(values)
    }

    return {
        handleUpdateApplication,
        updateApplicationMutation
    }
}
export default useUpdateApplication
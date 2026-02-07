import { PropertyService } from "@/services/property"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

const useAddPropertyDocument = () => {
    const query = useQueryClient()
    const AddDocumentMutation = useMutation({
        mutationKey: ['documents'],
        
        mutationFn: async (values:FormData) => {
            return await new PropertyService().addPropertyDocuments(values)
        },
        onMutate() {
            toast.loading("Adding Document", {toastId : "addDoc"})
        },
        onSuccess() {
            toast.dismiss("addDoc")
            toast.success("Document Added Successfully")
            query.invalidateQueries({queryKey : ['documents']})
        }, 
        onError(error) {
             toast.dismiss("addDoc")
             toast.error(error?.message)
        }
    })

    async function handleAddDocuments(values:FormData) {
return await AddDocumentMutation.mutateAsync(values)
    }

    return {
        AddDocumentMutation,
        handleAddDocuments
    }
}

export default useAddPropertyDocument
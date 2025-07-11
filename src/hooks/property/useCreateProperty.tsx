import { PropertyService } from "@/services/property"

import { useMutation } from "@tanstack/react-query"

import { toast } from "react-toastify"

export default function useCreateProperty() {
 
    const createPropertyMutation = useMutation({
        mutationFn : async (values:FormData)=> await new PropertyService().createProperty(values),
        onMutate () {
            toast.loading("Request Loading", {toastId : "createProp"})
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSuccess (data, variables:any) {
            console.log(variables)
            toast.dismiss("createProp")
            toast.success(`Property Created Successfully`)
            
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError (error:any) {
            toast.dismiss("createProp")
            console.log(error)
      toast.error(error?.error)
        }
    })

    const doCreateProperty = async(values:FormData) => {
       await createPropertyMutation.mutateAsync(values)
    }
    return {
createPropertyMutation,
doCreateProperty
    }
}
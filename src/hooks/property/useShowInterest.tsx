import { PropertyService } from "@/services/property"
import { InterestProps } from "@/types/auth/formik"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

const useShowInterest = ()=> {
    const interestMutation = useMutation({
        mutationFn : async(values:InterestProps) => {
            return new PropertyService().interstApplication(values)
        },
        onMutate: ()=> {
              toast.loading("Request Loading", { toastId: "inviteProp" });
        },
        onSuccess: (data) => {
               toast.dismiss("inviteProp");
                  toast.success(`Interest sent Successfully`);
            return data
        },
        onError: (error)=> {
            toast.dismiss("inviteProp");
      toast.error(error?.message);
        }
    })
    
   async function handleInterest(values:InterestProps) {
        return await interestMutation.mutateAsync(values)
    }
    return {
        interestMutation,
        handleInterest
    }
}

export default useShowInterest
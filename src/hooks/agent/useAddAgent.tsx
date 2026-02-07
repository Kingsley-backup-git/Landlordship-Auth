import { AgentFormValues } from "@/app/dashboard/(dashboard)/people/agents/components/types";
import { AgentService } from "@/services/agent";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useAddAgent() {
    const addAgentMutation = useMutation({
        mutationFn: async(values: AgentFormValues) => {
            return await new AgentService().addAgent(values)
        },
        onMutate: () => {
            toast.loading("adding agent", {toastId : "agent"})
        },
        onSuccess: () => {
               toast.dismiss("agent")
            toast.success("successfully added agent")
        },
        onError: (error) => {
                 toast.dismiss("agent")   
            toast.error(error?.message)
        }
    })

    async function AddAgentHandler(values: AgentFormValues) {
        return await addAgentMutation.mutateAsync(values)
    }

    return {
        AddAgentHandler,
        addAgentMutation
    }


}
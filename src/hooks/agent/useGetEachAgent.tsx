import { AgentFormValues } from "@/app/dashboard/(dashboard)/people/agents/components/types";
import { AgentService } from "@/services/agent";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useGetEachAgent() {
    const getAgentMutation = useMutation({
        mutationFn: async(agentId: string) => {
            return await new AgentService().getEachAgent(agentId)
        },
        onMutate: () => {
            toast.loading("fetching agent", {toastId : "agentId"})
        },
        onSuccess: () => {
               toast.dismiss("agentId")
            toast.success("successful")
        },
        onError: (error) => {
                 toast.dismiss("agentId")   
            toast.error(error?.message)
        }
    })

    async function getAgentHandler(agentId: string) {
        return await getAgentMutation.mutateAsync(agentId)
    }

    return {
        getAgentHandler,
        getAgentMutation
    }


}
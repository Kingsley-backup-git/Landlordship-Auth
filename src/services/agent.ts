import { AgentFormValues } from "@/app/dashboard/(dashboard)/people/agents/components/types"
import { userInstance } from "@/utils/axios"

export class AgentService {
    addAgent = async(values:AgentFormValues) => {
        try {
            const res = await userInstance.post("/api/agent/", values)
            
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            throw new Error(error?.error)
        }
    }

      getAgent = async() => {
        try {
            const res = await userInstance.get("/api/agent/")
            
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            throw new Error(error?.error)
        }
      }
    
     getEachAgent = async(agentId:string) => {
        try {
            const res = await userInstance.get(`/api/agent/${agentId}`)
            
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            throw new Error(error?.error)
        }
     }
    
      assignAgent = async(values: {requestId:string, agentId:string}) => {
        try {
            const res = await userInstance.post(`/api/maintenance/${values.requestId}/assign-agent`, {agentId: values.agentId})
            
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            throw new Error(error?.error)
        }
    }

    getAgentRequests = async() => {
        try {
            const res = await userInstance.get(`/api/maintenance/agent`)
            
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            throw new Error(error?.error)
        }
    }

        getAgentAssignedRequests = async() => {
        try {
            const res = await userInstance.get(`/api/maintenance/agent/all`)
            
            return res?.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            throw new Error(error?.error)
        }
    }
}
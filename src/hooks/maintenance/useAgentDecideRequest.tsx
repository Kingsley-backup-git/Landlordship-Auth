import { MaintenanceService } from '@/services/maintenance'
import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify'

export default function useAgentDecideRequest(id : string) {
    const query = useQueryClient();
    const mutation = useMutation({
        mutationKey : ['acceptrequest'],
        mutationFn: async (values:string) => {
            return await new MaintenanceService().agentAcceptRequest(values)
        },
           onMutate() {
            toast.loading("Accepting request...", {toastId : "accept"})
        },
        onSuccess() {
             toast.dismiss("accept")
            toast.success("Request accepted successfully")
            query.invalidateQueries({ queryKey: ['agentquery'] })
                 query.invalidateQueries({queryKey : ['chatsId', id]})
        },
          onError(error) {
             toast.dismiss("accept")
            toast.success(error?.message)
        }
        
    })

    const rejectMutation = useMutation({
          mutationKey : ['rejectrequest'],
           mutationFn: async (values:string) => {
            return await new MaintenanceService().agentRejectRequest(values)
        },
        onMutate() {
            toast.loading("Rejecting request...", {toastId : "reject"})
        },
        onSuccess() {
             toast.dismiss("reject")
            toast.success("Request rejected successfully")
            query.invalidateQueries({ queryKey: ['agentquery'] })
                  query.invalidateQueries({queryKey : ['chatsId', id]})
        },
          onError(error) {
             toast.dismiss("reject")
            toast.success(error?.message)
        }
    })
    
    async function handleAcceptRequest(values:string) {
return await mutation.mutateAsync(values)
    }

  async function handleRejectRequest(values:string) {
return await rejectMutation.mutateAsync(values)
    }
    return {
        handleAcceptRequest,
        handleRejectRequest,
        mutation,
        rejectMutation
    }
}


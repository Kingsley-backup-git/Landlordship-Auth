import { TenantService } from "@/services/tenant";

import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";

export default function useAcceptInvite() {
  const AcceptInviteMutation = useMutation({
    mutationFn: async (value: string) =>
      await new TenantService().acceptInvite(value),
    onMutate() {
      toast.loading("Request Loading", { toastId: "acceptProp" });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess(data, variables: any) {
      console.log(variables);
      toast.dismiss("acceptProp");
      toast.success(`Accepted Invite`);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.dismiss("acceptProp");
      toast.error(error?.message);
    },
  });

  const doAcceptInvite = async (value: string) => {
    await AcceptInviteMutation.mutateAsync(value);
  };
  return {
    AcceptInviteMutation,
    doAcceptInvite,
  };
}

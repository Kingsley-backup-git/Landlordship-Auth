import { PropertyService } from "@/services/property";
import { InviteProps } from "@/types/tenant/props";

import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";

export default function useSendInvite(stepHandler: (num: number) => void) {
  const sendInviteMutation = useMutation({
    mutationFn: async (values: InviteProps) =>
      await new PropertyService().sendInvite(values),
    onMutate() {
      toast.loading("Request Loading", { toastId: "inviteProp" });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess(data, variables: any) {
      console.log(variables);
      toast.dismiss("inviteProp");
      toast.success(`Invite sent Successfully`);
      stepHandler(6);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.dismiss("inviteProp");
      toast.error(error?.message);
    },
  });

  const doSendInvite = async (values: InviteProps) => {
    await sendInviteMutation.mutateAsync(values);
  };
  return {
    sendInviteMutation,
    doSendInvite,
  };
}

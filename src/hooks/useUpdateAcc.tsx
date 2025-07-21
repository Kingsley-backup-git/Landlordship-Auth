import { UserService } from "@/services/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function useUpdateAcc() {
  const { push } = useRouter();
  const updateMutation = useMutation({
    mutationFn: async (values: { type: string }) =>
      await new UserService().updateAcc(values),
    onMutate() {
      toast.loading("Request Loading", { toastId: "updateAcc" });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess(data, variables: any) {
      console.log(variables);
      toast.dismiss("updateAcc");
      toast.success(`Account successfully updated as a ${variables.type}`);
      push("/dashboard/overview");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.dismiss("updateAcc");
      console.log(error);
      toast.error(error?.error);
    },
  });

  const doAccountUpdate = async (values: { type: string }) => {
    await updateMutation.mutateAsync(values);
  };
  return {
    updateMutation,
    doAccountUpdate,
  };
}

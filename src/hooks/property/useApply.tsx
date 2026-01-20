import { ApplicationService } from "@/services/application";


import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";

export default function useApplyProperty() {
  const ApplyPropertyMutation = useMutation({
      mutationFn: async (values: FormData) =>
      await new ApplicationService().applyForPropery(values),
    onMutate() {
      toast.loading("Request Loading", { toastId: "applyProp" });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess(data, variables: any) {
      console.log(variables);
      toast.dismiss("applyProp");
      toast.success(`Applied Successfully`);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.dismiss("applyProp");
      toast.error(error?.message);
    },
  });

  const doApply = async (values:FormData) => {
    console.log(values)
   return await ApplyPropertyMutation.mutateAsync(values);
  };
  return {
    ApplyPropertyMutation,
    doApply,
  };
}

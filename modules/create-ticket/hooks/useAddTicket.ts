import { addTask } from "@/services/tickets";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useAddTicket(refetch: () => void) {
  const { mutate } = useMutation({
    mutationFn: (payload: { title: string; message: string }) => {
      return addTask(payload);
    },
    onSuccess: (response, variables) => {
      refetch();
      toast.success("Task Created Successfully");
    },
  });

  return { mutate };
}

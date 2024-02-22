import { closeTask } from "@/services/tickets";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useCloseTicket(id: string, refetch: () => void) {
  const { mutate } = useMutation({
    mutationFn: () => {
      return closeTask(id);
    },
    onSuccess: (response, variables) => {
      refetch();
      toast.success("Ticket Close successfully");
    },
  });

  return { mutate };
}

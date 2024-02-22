import { addAnswerToSpecificTask } from "@/services/tickets";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useSetAnswer(refetch: () => void) {
  const { mutate } = useMutation({
    mutationFn: (payload: {
      id: string | number;
      answers: Array<string> | undefined;
    }) => {
      return addAnswerToSpecificTask(payload);
    },
    onSuccess: (response, variables) => {
      refetch();
      toast.success("Your Answer Successfully Send");
    },
  });

  return { mutate };
}

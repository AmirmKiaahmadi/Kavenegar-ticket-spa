import { getSpecificTask } from "@/services/tickets";
import { useQuery } from "@tanstack/react-query";

export default function useGetTask(id: string) {
  const { data, isLoading, refetch } = useQuery({
    queryFn: async ({ queryKey }) => await getSpecificTask(queryKey[1]),
    queryKey: ["tasks", id],
  });
  return { data, refetch };
}

import { getTasks } from "@/services/tickets";
import { useQuery } from "@tanstack/react-query";

export default function useGetTickets() {
  const { data, isLoading, refetch } = useQuery({
    queryFn: async () => await getTasks(),
    queryKey: ["tasks"],
  });
  return { data, isLoading, refetch };
}

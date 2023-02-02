import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./client/api-endpoints";
import client from "./client";
import { HomePage } from "@/types";

export function useClients() {
  const { data, isLoading, error } = useQuery<HomePage[]>(
    [API_ENDPOINTS.REASONS],
    ({}) => client.clients.all()
  );

  return {
    clients: data ? data[0].acf.clients : null,
    isLoading,
    error,
  };
}

import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./client/api-endpoints";
import client from "./client";
import { Reason } from "@/types";

export function useReasons() {
  const { data, isLoading, error } = useQuery<Reason[]>(
    [API_ENDPOINTS.REASONS],
    ({}) => client.reasons.all()
  );

  return {
    reasons: data ? data : null,
    isLoading,
    error,
  };
}

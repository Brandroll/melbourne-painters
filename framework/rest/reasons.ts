import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./client/api-endpoints";
import client from "./client";
import { Reason } from "@/types";
import data from "../../seed/reasons.json";
export function useReasons() {
  return {
    reasons: data,
    isLoading: false,
    error: false,
  };
}

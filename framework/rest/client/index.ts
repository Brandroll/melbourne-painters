import type { Reasons, HomePage } from "@/types";
import { API_ENDPOINTS } from "./api-endpoints";
import { HttpClient } from "./http-client";

class Client {
  reasons = {
    all: () => HttpClient.get<Reasons[]>(API_ENDPOINTS.REASONS),
  };
  clients = {
    all: () => HttpClient.get<HomePage[]>(API_ENDPOINTS.CLIENTS),
  };
}

export default new Client();

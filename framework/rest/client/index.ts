import type { Reasons, HomePage, CreateContactUsInput } from "@/types";
import { API_ENDPOINTS } from "./api-endpoints";
import { HttpClient } from "./http-client";

class Client {
  reasons = {
    all: () => HttpClient.get<Reasons[]>(API_ENDPOINTS.REASONS),
  };
  clients = {
    all: () => HttpClient.get<HomePage[]>(API_ENDPOINTS.CLIENTS),
  };
  users = {
    contactUs: (input: CreateContactUsInput) => {
      const headers = {};
      return HttpClient.post<any>(API_ENDPOINTS.USERS_CONTACT_US, input);
    },
  };
}

export default new Client();

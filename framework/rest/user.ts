import { useMutation } from "react-query";
import { toast } from "react-toastify";

import client from "./client";

export const useContact = () => {
  return useMutation(client.users.contactUs, {
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

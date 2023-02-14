import type { NextApiRequest, NextApiResponse } from "next";
import addOAuthInterceptor from "axios-oauth-1.0a";
import axios from "axios";
const client = axios.create();

type Data = {
  name?: string;
  error?: string;
  message?: string;
};
addOAuthInterceptor(client, {
  algorithm: "HMAC-SHA1",
  key: "ck_b0af96a6479d029c8984db6d29ed381dd2e97f74",
  secret: "cs_303be522cf65093605c84fdc11b5e673860dfff4",
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Process a POST request
    console.log(req.body.data);
    const { first_name, last_name, email, phone, enquiry, contact, message } =
      req.body.data;
    const data = {
      input_1: first_name,
      input_3: last_name,
      input_5: email,
      input_6: phone,
      input_7: enquiry,
      input_8: contact,
      input_9: message,
    };
    axios({
      method: "post",
      url: "https://cms.melbourne-painters.com.au/wp-json/gf/v2/forms/1/submissions",

      data,
    })
      .then((resp) => {
        if (resp.data.is_valid) {
          res.status(200).json({ message: "Form Has Been Submitted" });
        } else {
          res
            .status(404)
            .json({ error: "Error While Submitting", name: resp.data });
        }
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  } else {
    // Handle any other HTTP method
    res.status(404).json({ error: "No Route Found" });
  }
}

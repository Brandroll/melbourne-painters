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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Process a POST request
    const {
      time_to_start,
      type,
      services,
      details,
      street_address,
      suburb,
      state,
      postcode,
      first_name,
      last_name,
      email,
      mobile,
      contact_time,
      apartment,
      token,
    } = req.body.data;
    const data = {
      input_1: time_to_start,
      input_3: type,
      input_4: services.join(","),
      input_7: details,
      input_8: street_address,
      input_9: suburb,
      input_10: state,
      input_11: postcode,
      input_12: first_name,
      input_13: last_name,
      input_15: email,
      input_17: mobile,
      input_18: contact_time,
      input_19: apartment,
    };

    const tokenRes = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_INV_SECRET_KEY}&response=${token}`
    );
    if (tokenRes.status == 200) {
      const formResp = await axios({
        method: "post",
        url: "https://cms.melbourne-painters.com.au/wp-json/gf/v2/forms/2/submissions",
        data,
      });
      try {
        if (formResp.data.is_valid) {
          res.status(200).json({ message: "Form Has Been Submitted" });
        } else {
          res
            .status(404)
            .json({ error: "Error While Submitting", name: formResp.data });
        }
      } catch (err) {
        res.status(404).json({ error: err });
      }
    }
  }
}

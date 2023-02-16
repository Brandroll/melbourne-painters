import * as yup from "yup";
import { Form } from "@/components/UI/forms/Form";
import { CreateContactUsInput } from "@/types";
import { useContact } from "@/framework/rest/user";
import React, { TextareaHTMLAttributes, useState } from "react";
import Input from "./ContactInput";
import { toast } from "react-toastify";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const contactFormSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone: yup.string().required("Phone is required"),
  email: yup
    .string()
    .email("Incorrect email format")
    .required("E-mail is required"),
  enquiry: yup.string().required("Enquiry is required"),
  contact: yup.string().required("Time to contact is required"),
  message: yup.string().required("Message is required"),
});

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  shadow?: boolean;
  variant?: "normal" | "solid" | "outline";
}
const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const {
    className,
    label,
    name,
    error,
    variant = "normal",
    shadow = false,
    inputClassName,
    ...rest
  } = props;
  return (
    <div className={"grid col-span-2  "}>
      {label && (
        <label htmlFor={name} className="  text-brand-blue mb-3 ">
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        rows={4}
        ref={ref}
        {...rest}
      />
      {error && <p className="my-2 text-xs text-red-500">{error}</p>}
    </div>
  );
});
export default function ContactForm() {
  const recaptchaRef = React.createRef();
  const [resetForm, setResetForm] = useState("");
  const onReCAPTCHAChange = (captchaCode: string) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    console.log(captchaCode);
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert

    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    // recaptchaRef.current.reset();
  };

  function onSubmit(values: CreateContactUsInput) {
    const token = recaptchaRef.current.getValue();
    if (!token) {
      toast.error("Please verify captcha");
      return;
    }
    axios
      .post("/api/contact", {
        data: { ...values, token },
      })
      .then((res) => {
        if (res.data.message) {
          toast.success(res.data.message);
          setResetForm(null);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  }
  return (
    <>
      <Form<CreateContactUsInput>
        onSubmit={onSubmit}
        validationSchema={contactFormSchema}
        resetValues={resetForm}
      >
        {({ register, formState: { errors } }) => (
          <div className="grid grid-cols-2 py-4 font-isidorasans_medium  px-4 gap-8 font-normal">
            <Input
              label="First name"
              {...register("first_name")}
              type="text"
              error={errors.first_name?.message!}
            />

            <Input
              label="Last name"
              {...register("last_name")}
              type="text"
              error={errors.last_name?.message!}
            />

            {/*         
            <div className="grid col-span-2 lg:col-span-1">
              <label className=" text-brand-blue mb-3  ">Last name</label>
              <input
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder={"Last name"}
                type={"text"}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                {...register("last_name")}
              />
            </div> */}

            <Input
              label="Your Email Address"
              {...register("email")}
              type="email"
              error={errors.email?.message!}
            />
            <Input
              label="Your Phone Number"
              {...register("phone")}
              error={errors.phone?.message!}
            />

            <div className="grid col-span-2 lg:col-span-1 ">
              <label className=" text-brand-blue mb-3 ">Enquire About</label>
              <select
                className="p-4 border-b-4 w-full border-brand-blue rounded-md outline-none"
                placeholder="Your Phone Number"
                required
                {...register("enquiry")}
              >
                <option value="">Please select</option>
                <option value="Power Washing">Power Washing</option>
                <option value="Brick, Concrete, Drywall & Plaster Painting">
                  Brick, Concrete, Drywall & Plaster Painting
                </option>
                <option value="Drywall & Plaster Repair">
                  Drywall & Plaster Repair
                </option>
                <option value="Structural Steel Painting">
                  Structural Steel Painting
                </option>
                <option value="Concrete Finishing">Concrete Finishing</option>
                <option value="Wood Finishing">Wood Finishing</option>
                <option value="Elastomer Coatings">Elastomer Coatings</option>
                <option value="Stripping & Refinishing">
                  Stripping & Refinishing
                </option>
                <option value="Low Voc & No Voc Paints">
                  Low Voc & No Voc Paints
                </option>
                <option value="Urethane & Epoxy Coatings">
                  Urethane & Epoxy Coatings
                </option>
                <option value="Other">Other</option>
              </select>

              {errors.enquiry && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.enquiry?.message}
                </p>
              )}
            </div>

            <div className="grid col-span-2 lg:col-span-1 ">
              <label className=" text-brand-blue mb-3 ">
                When can we contact you
              </label>
              <select
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder="Your Phone Number"
                required
                {...register("contact")}
              >
                <option value={""}>Please select</option>
                <option value="Morning 9am - 12pm">Morning 9am - 12pm</option>
                <option value="Afternoon 12pm - 5pm">
                  Afternoon 12pm - 5pm
                </option>
                <option value="Evening 5pm - 7PM">Evening 5pm - 7PM</option>
                <option value="Late evening 7PM - 9PM">
                  Late evening 7PM - 9PM
                </option>
              </select>
              {errors.contact && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.contact?.message}
                </p>
              )}
            </div>
            <TextArea
              label="Message"
              error={errors.message?.message}
              {...register("message")}
            />
            <div className="grid col-span-2 lg:col-span-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onReCAPTCHAChange}
              />
            </div>

            <button className="py-2 uppercase px-8 bg-brand-blue rounded-3xl text-white max-w-fit">
              Submit
            </button>
          </div>
        )}
      </Form>
    </>
  );
}

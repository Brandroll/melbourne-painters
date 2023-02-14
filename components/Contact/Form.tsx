import * as yup from "yup";
import { Form } from "@/components/UI/forms/Form";
import { CreateContactUsInput } from "@/types";
import { useContact } from "@/framework/rest/user";
import React, { TextareaHTMLAttributes } from "react";
import Input from "./ContactInput";
import { toast } from "react-toastify";
import axios from "axios";
const contactFormSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  phone: yup.string().required("phone is required"),
  email: yup
    .string()
    .email("error-email-format")
    .required(" email is required"),
  enquiry: yup.string().required("enquiry is required"),
  contact: yup.string().required("time to contact is required"),
  message: yup.string(),
});

// const Input = (props: {
//   label: string;
//   error?: string;
//   type?: string;
//   name: string;
// }) => {
//   const { label, error, type, name } = props;

//   return (
//     <>
//       <div className="grid col-span-2 lg:col-span-1">
//         <label className=" text-brand-blue mb-3  ">{label}</label>
//         <input
//           className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
//           placeholder={label}
//           type={type ? type : "text"}
//           id={name}
//           name={name}
//           autoComplete="off"
//           autoCorrect="off"
//           autoCapitalize="off"
//           spellCheck="false"
//           aria-invalid={error ? "true" : "false"}
//           {...rest}

//         />
//         {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
//       </div>
//     </>
//   );
// };
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
  const { mutate, isLoading } = useContact();

  function onSubmit(values: CreateContactUsInput) {
    axios
      .post("/api/contact", {
        data: values,
      })
      .then((res) => {
        if (res.data.message) {
          toast.success(res.data.message);
        }
      })
      .catch((err) => toast.error("Error"));
  }
  return (
    <>
      <Form<CreateContactUsInput>
        onSubmit={onSubmit}
        validationSchema={contactFormSchema}
      >
        {({ register, formState: { errors } }) => (
          <div className="grid grid-cols-2 py-4 font-isidorasans_medium  px-4 gap-8 font-normal">
            <div className="grid col-span-2 lg:col-span-1">
              <label className=" text-brand-blue mb-3  ">First name</label>
              <input
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder={"first name"}
                type={"text"}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                {...register("first_name")}
              />
            </div>
            <div className="grid col-span-2 lg:col-span-1">
              <label className=" text-brand-blue mb-3  ">Last name</label>
              <input
                className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
                placeholder={"last name"}
                type={"text"}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                {...register("last_name")}
              />
            </div>

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
                <option value="Please select">Please select</option>
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
                <option value="Please select">Please select</option>
                <option value="Morning 9am - 12pm">Morning 9am - 12pm</option>
                <option value="Afternoon 12pm - 5pm">
                  Afternoon 12pm - 5pm
                </option>
                <option value="Evening 5pm - 7PM">Evening 5pm - 7PM</option>
                <option value="Late evening 7PM - 9PM">
                  Late evening 7PM - 9PM
                </option>
              </select>
            </div>
            <TextArea label="Message" {...register("message")} />

            {/* <Input
              label="First Name"
              {...register("first_name")}
              error={errors.first_name?.message!}
            />

            <Input
              label="Last Name"
              {...register("last_name")}
              error={errors.last_name?.message!}
            />

            <Input
              label="Your Email Address"
              {...register("email")}
              error={errors.email?.message!}
            />

           */}

            <button className="py-2 uppercase px-8 bg-brand-blue rounded-3xl text-white max-w-fit">
              Submit
            </button>
          </div>
        )}
      </Form>
    </>
  );
}

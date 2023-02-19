import React, { useEffect, useState } from "react";

type Info = {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  contact_time:
    | "Morning 9am  12pm"
    | "Afternoon 12pm - 5pm"
    | "Evening 5pm - 7pm"
    | "Late evening 7pm - 9pm"
    | "Any time"
    | "ASAP"
    | "";
  post_code: string;
};
const FormGroup = ({
  label,
  type,
  value,
  name,
  onChange,
  info,
  isError,
}: {
  label: string;
  type: "email" | "text";

  info: Info;

  value: string;
  name: string;
  isError: Boolean;

  onChange: ({
    first_name,
    last_name,
    email,
    mobile,
    contact_time,
    post_code,
  }: Info) => void;
}) => {
  return (
    <div className="grid my-2   ">
      <label className="mb-4 text-popup-button  font-isidorasans     font-medium text-left">
        <span className="uppercase">{label + ":"}</span>
        {isError && info[name].length < 1 && (
          <span className="  mt-2 text-xs  text-red-500">
            {" "}
            (This field is required)
          </span>
        )}
      </label>
      <input
        type={type}
        value={value}
        onChange={(evt) => onChange({ ...info, [name]: evt.target.value })}
        className="   w-80 py-2 px-2 p-4 border-b-4 border-brand-blue rounded-md outline-none"
        placeholder={label}
      />
    </div>
  );
};

const _contact = [
  "Morning 9am - 12pm",
  "Afternoon 12pm - 5pm",
  "Evening 5pm - 7pm",
  "Late evening 7pm - 9pm",
  "Any time",
  "ASAP",
];
const YourInfo: React.FC<any> = (props: {
  info: Info;
  isError: Boolean;
  setInfo: ({
    first_name,
    last_name,
    email,
    mobile,
    contact_time,
    post_code,
  }: Info) => void;
}) => {
  const { info, setInfo, isError } = props;

  return (
    <div className="lg:w-240 mx-auto py-8">
      <form className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          <FormGroup
            isError={isError}
            info={info}
            value={info.first_name}
            onChange={setInfo}
            name={"first_name"}
            label="First Name"
            type="text"
          />
          <FormGroup
            info={info}
            isError={isError}
            value={info.last_name}
            onChange={setInfo}
            name={"last_name"}
            label="Last Name"
            type="text"
          />
          <FormGroup
            isError={isError}
            info={info}
            value={info.email}
            onChange={setInfo}
            name={"email"}
            label="Email"
            type="email"
          />
          <FormGroup
            info={info}
            isError={isError}
            value={info.mobile}
            onChange={setInfo}
            name={"mobile"}
            label="Mobile"
            type="text"
          />
        </div>
        <div className="my-2">
          <h3 className="mb-4 mt-4 text-popup-button text-left -ml-4">
            WHEN CAN WE CONTACT YOU?
            {isError && info.contact_time.length < 1 && (
              <span className="  mt-2 text-xs  text-red-500">
                {" "}
                (This field is required)
              </span>
            )}
          </h3>

          <div className="grid -ml-4 justify-start md:grid-cols-3 gap-4">
            {_contact.map((opt: any) => (
              <div
                onClick={() => {
                  if (info.contact_time === opt) {
                    setInfo({ ...info, contact_time: "" });
                  } else {
                    setInfo({ ...info, contact_time: opt });
                  }
                }}
                className={`${
                  opt === info.contact_time
                    ? "bg-brand-blue-dark"
                    : "bg-form-btn"
                }  info-btn bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer `}
              >
                <span className="font-isidorasans_regular whitespace-nowrap capitalize px-4">
                  {opt.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* <textarea
          className="p-4 w-2/3 border-b-4 border-brand-blue rounded-md outline-none"
          placeholder="/ Suburb"
          required
        /> */}
        {/* <FormGroup label="POSTCODE/SUBURB*" type="text" /> */}
      </form>
    </div>
  );
};
export default YourInfo;

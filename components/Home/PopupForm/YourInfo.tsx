import React, { useState } from "react";

const RadioFormGroup = ({ value }: { value: string }) => {
  return (
    <>
      <div className="gchoice  ">
        <input className="hidden" value={value} tabIndex={26} />
        <label className="info-btn bg-popup-button uppercase hover:bg-brand-blue-dark hover:cursor-pointer ">
          {value}
        </label>
      </div>
    </>
  );
};
const FormGroup = ({
  label,
  type,
}: {
  label: string;
  type: "email" | "text";
}) => {
  return (
    <div className="grid my-2   ">
      <label className=" text-popup-button  font-isidorasans uppercase font-medium text-left">
        {label + ":"}
      </label>
      <input
        type={type}
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
const YourInfo: React.FC<any> = ({ onSubmit }) => {
  const [selectTime, setTime] = useState("");
  return (
    <div className="lg:w-240 mx-auto py-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col items-center justify-center"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormGroup label="First Name" type="text" />
          <FormGroup label="Last Name" type="text" />
          <FormGroup label="Email" type="email" />
          <FormGroup label="Mobile" type="text" />
        </div>
        <div className="my-2">
          <h3 className="mb-2 text-popup-button text-left -ml-4">
            WHEN CAN WE CONTACT YOU?
          </h3>

          <div className="grid -ml-4 justify-start md:grid-cols-3 gap-4">
            {_contact.map((opt) => (
              <button
                onClick={() => {
                  if (selectTime === opt) {
                    setTime("");
                  } else {
                    setTime(opt);
                  }
                }}
                className={`${
                  opt === selectTime ? "bg-brand-blue-dark" : "bg-form-btn"
                }  info-btn bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer `}
              >
                <span className="font-isidorasans_regular whitespace-nowrap capitalize px-4">
                  {opt.toUpperCase()}
                </span>
              </button>
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

import React from "react";

const RadioFormGroup = ({ value }: { value: string }) => {
  return (
    <>
      <div className="gchoice  ">
        <input className="hidden" value={value} tabIndex={26} />
        <label className="info-btn ">{value}</label>
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
    <div className="grid my-2 md:w-64 ">
      <label className="uppercase font-roboto font-medium text-left">
        {label}
      </label>
      <input
        type={type}
        className="border w-80 py-2 px-2 "
        placeholder={label.toLowerCase() + ":"}
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
  return (
    <div className="lg:w-240 mx-auto py-8">
      <form className="flex flex-col items-center justify-center">
        <FormGroup label="First Name" type="text" />
        <FormGroup label="Last Name" type="text" />
        <FormGroup label="Email" type="email" />
        <FormGroup label="Phone" type="text" />
        <div className="my-2">
          <h3>WHEN CAN WE CONTACT YOU?</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {_contact.map((value) => (
              <RadioFormGroup value={value} />
            ))}
          </div>
        </div>

        <FormGroup label="POSTCODE/SUBURB*" type="text" />
      </form>
    </div>
  );
};
export default YourInfo;

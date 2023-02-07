import React from "react";

const RadioFormGroup = ({ value }: { value: string }) => {
  return (
    <>
      <div className="gchoice  ">
        <input className="hidden" value={value} tabIndex={26} />
        <label className="info-btn bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer ">
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
      <label className=" text-brand-blue   font-roboto font-medium text-left">
        {label}
      </label>
      <input
        type={type}
        className="   w-80 py-2 px-2 p-4 border-b-4 border-brand-blue rounded-md outline-none"
        placeholder={label + " :"}
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
        <div className="grid grid-cols-2 gap-4">
          <FormGroup label="First Name" type="text" />
          <FormGroup label="Last Name" type="text" />
          <FormGroup label="Email" type="email" />
          <FormGroup label="Mobile" type="text" />
        </div>
        <div className="my-2">
          <h3 className="mb-2 text-brand-blue">WHEN CAN WE CONTACT YOU?</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {_contact.map((value) => (
              <RadioFormGroup value={value} />
            ))}
          </div>
        </div>
        <textarea
          className="p-4 w-2/3 border-b-4 border-brand-blue rounded-md outline-none"
          placeholder="Postcode / Suburb"
          required
        />
        {/* <FormGroup label="POSTCODE/SUBURB*" type="text" /> */}
      </form>
    </div>
  );
};
export default YourInfo;

const FormGroup = ({
  label,
  type,
}: {
  label: string;
  type: "email" | "text";
}) => {
  return (
    <div className="grid w-full my-2 md:w-64 ">
      <label className="uppercase font-roboto font-medium text-left">
        {label}
      </label>
      <input
        type={type}
        className="border w-full lg:w-80 py-2 px-2 "
        placeholder={label.toLowerCase() + ":"}
      />
    </div>
  );
};

const MobileForm: React.FC<any> = ({ onSubmit }) => {
  return (
    <div className="lg:w-240 mx-auto py-8">
      <form className="flex flex-col items-center justify-center">
        <FormGroup label="First Name" type="text" />
        <FormGroup label="Last Name" type="text" />
        <FormGroup label="Email" type="email" />
        <FormGroup label="Phone" type="text" />

        <FormGroup label="POSTCODE/SUBURB*" type="text" />
        <div className="grid w-full my-2 md:w-64 ">
          <label className="uppercase font-roboto font-medium text-left">
            Your Message
          </label>

          <textarea className="border w-80 py-2 px-2 "></textarea>
        </div>
        <button className="p-3 bg-brand-blue text-white my-4 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};
export default MobileForm;

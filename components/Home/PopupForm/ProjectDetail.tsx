import React from "react";
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
        className="   w-full py-2 px-2 p-4 border-b-4 border-brand-blue rounded-md outline-none"
        placeholder={label}
      />
    </div>
  );
};
const stateDropDown = ["NSW", "QLD", "SA", "TA", "WA", "VIC"];
const ProjectDetail: React.FC<any> = ({
  onSubmit,
  setCurrentForm,
  defaultValues,
  isLoading,
}) => {
  return (
    <div className="w-full ">
      <h1 className="uppercase  text-left px-16 text-popup-button  mt-2">
        Project Details:
      </h1>

      <textarea
        className="font-isidorasans_regular p-4  border-b-4 border-brand-blue rounded-md   outline-none px-4"
        placeholder="Please write any further details about your project here"
        rows={5}
        cols={100}
      ></textarea>
      <div className="px-16">
        <FormGroup label="Street Address" type="text" />
        <div className="grid grid-cols-8 gap-2">
          <div className="col-span-3">
            <FormGroup label="Suburb" type="text" />
          </div>
          <div className="col-span-3">
            <FormGroup label="State" type="text" />
          </div>
          <div className="col-span-2 ">
            <FormGroup label="Postcode" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;

import React, { useEffect } from "react";

interface ProjectDetails {
  details: string;
  street_address: string;
  suburb: string;
  state: string;
  apartment: string;
  postcode: string;
}
const FormGroup = ({
  label,
  type,
  value,
  name,
  onChange,
  projectDetails,
  isError,
  optional,
  placeholder,
}: {
  label: string;
  projectDetails: ProjectDetails;

  type: "email" | "text" | "number";
  value: string;
  name: string;
  isError: Boolean;
  placeholder?: string;
  optional?: Boolean;
  onChange: ({
    details,
    street_address,
    suburb,
    state,
    postcode,
  }: ProjectDetails) => void;
}) => {
  return (
    <div className="grid my-2   ">
      <label className="flex flex-col text-popup-button mb-4 font-isidorasans  font-medium text-left">
        <span className="uppercase">
          {label + ":"}{" "}
          {optional && <span className="lowercase text-sm">(optional)</span>}
        </span>

        {!optional && isError && projectDetails[name].length < 1 && (
          <span className="  mt-2 text-xs  text-red-500">
            (This field is required)
          </span>
        )}
      </label>

      <input
        type={type}
        value={value}
        onChange={(evt) => {
          onChange({ ...projectDetails, [name]: evt.target.value });
        }}
        className="   w-full py-2 px-2 p-4 border-b-4 border-brand-blue rounded-md outline-none"
        placeholder={placeholder ? placeholder : label}
      />
    </div>
  );
};

const ProjectDetail: React.FC<any> = (props: {
  projectDetail: ProjectDetails;
  setProjectDetail: ({
    details,
    street_address,
    suburb,
    state,
    postcode,
  }: ProjectDetails) => void;
  isError: Boolean;
}) => {
  const { projectDetail, setProjectDetail, isError } = props;

  return (
    <div className="w-full ">
      <h1 className="  text-left px-16 text-popup-button  mt-2 mb-4">
        <span className="uppercase"> Project Details: </span>
        {isError && projectDetail.details.length < 1 && (
          <span className="ml-2 mt-2   text-xs  text-red-500">
            (This field is required)
          </span>
        )}
      </h1>

      <textarea
        className="font-isidorasans_regular p-4  border-b-4 border-brand-blue rounded-md   outline-none px-4"
        placeholder="Please write any further details about your project here"
        rows={5}
        onChange={(evt) =>
          setProjectDetail({ ...projectDetail, details: evt.target.value })
        }
        value={projectDetail.details}
        cols={100}
      ></textarea>
      <div className="px-16">
        <FormGroup
          isError={isError}
          value={projectDetail.street_address}
          projectDetails={projectDetail}
          onChange={setProjectDetail}
          name={"street_address"}
          label="Street Address"
          type="text"
        />
        {/* <div className="my-4"></div>
        <FormGroup
          isError={isError}
          value={projectDetail.street_address}
          projectDetails={projectDetail}
          onChange={setProjectDetail}
          name={"apartment"}
          optional={true}
          label="Apartment number, suite number, unit number"
          placeholder="Apartment, Unit, Suite,  Number etc. (optional)"
          type="number"
        /> */}
        <div className="grid grid-cols-8 gap-2">
          <div className="col-span-3">
            <FormGroup
              isError={isError}
              value={projectDetail.suburb}
              projectDetails={projectDetail}
              onChange={setProjectDetail}
              name={"suburb"}
              label="Suburb"
              type="text"
            />
          </div>
          <div className="col-span-3">
            <FormGroup
              isError={isError}
              value={projectDetail.state}
              projectDetails={projectDetail}
              onChange={setProjectDetail}
              name={"state"}
              label="State"
              type="text"
            />
          </div>
          <div className="col-span-2 ">
            <FormGroup
              isError={isError}
              value={projectDetail.postcode}
              projectDetails={projectDetail}
              onChange={setProjectDetail}
              name={"postcode"}
              label="Postcode"
              type="number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;

import React from "react";

const ProjectDetail: React.FC<any> = ({
  onSubmit,
  setCurrentForm,
  defaultValues,
  isLoading,
}) => {
  return (
    <div className="w-full px-16">
      <h1 className="uppercase text-brand-blue my-4">Project Details</h1>
      <textarea
        className="  border-b-4 border-brand-blue rounded-md   outline-none px-4"
        placeholder="Please write the details of your project here:"
        rows={12}
        cols={100}
      ></textarea>
    </div>
  );
};
export default ProjectDetail;

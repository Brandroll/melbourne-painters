import React, { useEffect, useState } from "react";
const serviceKind = [
  "Exterior",
  "Interior",
  "Roof Painting",
  "Render",
  "Graffiti Removal",
  "Decking",
  "Wallpaper",
  "Industrial Coating",
  "Special Finishes",
];
export default function ServiceType(props: any) {
  const { setProjectInfo, projectInfo, isError } = props;

  return (
    <section className="my-6">
      <h4 className="mb-4 text-left  font-isidorasans_semi_bold">
        What kind of painting service do you require:
        {isError && projectInfo.services.length < 1 && (
          <span className=" ml-2   mt-2 text-xs  text-red-500">
            {" "}
            (This field is required)
          </span>
        )}
      </h4>
      <div className="grid grid-cols-2  md:grid-cols-4    gap-4">
        {serviceKind.map((opt) => (
          <div>
            <Option
              label={opt}
              projectInfo={projectInfo}
              setProjectInfo={setProjectInfo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const Option = (props: any) => {
  const [isSelected, setIsSelected] = useState(false);

  const { label, projectInfo, setProjectInfo } = props;
  const onBtnClick = (opt: any) => {
    const t = JSON.parse(JSON.stringify(projectInfo.services));
    const hasOpt = projectInfo.services.indexOf(opt);

    if (hasOpt == -1) {
      setProjectInfo({
        ...projectInfo,
        services: projectInfo.services.concat(opt),
      });
    } else {
      t.splice(hasOpt, 1);

      setProjectInfo({
        ...projectInfo,
        services: JSON.parse(JSON.stringify(t)),
      });
    }
  };
  useEffect(() => {
    const hasOpt = projectInfo.services.indexOf(label);

    if (hasOpt > -1) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [projectInfo, setProjectInfo]);

  return (
    <button
      onClick={() => onBtnClick(label)}
      className={`${
        isSelected ? "bg-brand-blue-dark" : "bg-form-btn"
      }   info-btn active:bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer `}
    >
      <span className="font-isidorasans_regular whitespace-nowrap capitalize px-4">
        {label.toUpperCase()}
      </span>
    </button>
  );
};

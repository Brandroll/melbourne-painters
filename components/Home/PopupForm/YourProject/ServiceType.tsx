import React, { useState } from "react";
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
export default function ServiceType() {
  const [seletcedServices, setServices] = useState([]);
  const onBtnClick = (opt: any) => {
    const t = seletcedServices;
    const hasOpt = seletcedServices.indexOf(opt);

    if (hasOpt == -1) {
      t.push(opt);
      setServices(t);
    } else {
      console.log({ hasOpt });
      t.splice(hasOpt, 1);
      setServices(t);
    }
  };
  return (
    <section className="my-6">
      <h4 className="mb-4 text-left  font-isidorasans_semi_bold">
        WHEN DO YOU EXPECT YOUR PROJECT TO START?
      </h4>
      <div className="grid grid-cols-2  md:grid-cols-4    gap-4">
        {serviceKind.map((opt) => (
          <div>
            <button
              onClick={() => onBtnClick(opt)}
              className={`${
                seletcedServices.indexOf(opt) > -1
                  ? "bg-brand-blue-dark"
                  : "bg-form-btn"
              }   info-btn active:bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer `}
            >
              <span className="font-isidorasans_regular whitespace-nowrap capitalize px-4">
                {opt.toUpperCase()}
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

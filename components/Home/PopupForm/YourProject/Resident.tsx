import React, { useState } from "react";
const resident = ["residential", "commercial", "Industrial"];

export default function Resident(props: any) {
  const { setProjectInfo, projectInfo, isError } = props;

  return (
    <section className="my-6">
      <h4 className="mb-4 text-left  font-isidorasans_semi_bold">
        Residential, Commercial or Industrial:
        {isError && projectInfo.type.length < 1 && (
          <span className="ml-2 mt-2 text-xs  text-red-500">
            {" "}
            (This field is required)
          </span>
        )}
      </h4>
      <div className="grid grid-cols-2  md:grid-cols-4    gap-4">
        {resident.map((opt) => (
          <div>
            <button
              onClick={() => {
                if (projectInfo.type === opt) {
                  setProjectInfo({ ...projectInfo, type: "" });
                } else {
                  setProjectInfo({ ...projectInfo, type: opt });
                }
              }}
              className={`${
                opt === projectInfo.type ? "bg-brand-blue-dark" : "bg-form-btn"
              }  info-btn bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer `}
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

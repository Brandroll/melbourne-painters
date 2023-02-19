import React, { useState } from "react";
import PopupButton from "../PopupButton";

export default function Expectactions(props: any) {
  const { setProjectInfo, projectInfo, isError } = props;
  const expections = [
    "ASAP",
    "next few days",
    "next few weeks",
    "next few months",
    "flexible",
  ];
  return (
    <section className="my-6">
      <h4 className="mb-4 text-left  font-isidorasans_semi_bold">
        {/* {projectInfo.time_to_start.length < 1 && (
          <p className="mt-2 text-xs  text-red-500">This is required</p>
        )} */}
        WHEN DO YOU EXPECT YOUR PROJECT TO START?
        {isError && projectInfo.time_to_start.length < 1 && (
          <span className="ml-2 mt-2 text-xs  text-red-500">
            {" "}
            (This field is required)
          </span>
        )}
      </h4>
      <div className="grid grid-cols-2  md:grid-cols-4    gap-4">
        {expections.map((opt) => (
          <div>
            <button
              onClick={() => {
                if (projectInfo.time_to_start === opt) {
                  setProjectInfo({ ...projectInfo, time_to_start: "" });
                } else {
                  setProjectInfo({ ...projectInfo, time_to_start: opt });
                }
              }}
              className={`${
                opt === projectInfo.time_to_start
                  ? "bg-brand-blue-dark"
                  : "bg-form-btn"
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

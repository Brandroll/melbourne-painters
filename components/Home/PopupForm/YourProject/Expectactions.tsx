import React, { useState } from "react";
import PopupButton from "../PopupButton";

export default function Expectactions() {
  const [selectedExpectation, setSelectedExpected] = useState("");
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
        WHEN DO YOU EXPECT YOUR PROJECT TO START?*
      </h4>
      <div className="grid grid-cols-2  md:grid-cols-4    gap-4">
        {expections.map((opt) => (
          <div>
            <button
              onClick={() => {
                if (selectedExpectation === opt) {
                  setSelectedExpected("");
                } else {
                  setSelectedExpected(opt);
                }
              }}
              className={`${
                opt === selectedExpectation
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

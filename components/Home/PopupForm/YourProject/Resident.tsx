import React, { useState } from "react";
const resident = ["residential", "commercial", "Industrial"];

export default function Resident() {
  const [selectedresident, setResident] = useState("");

  return (
    <section className="my-6">
      <h4 className="mb-4 text-left  font-isidorasans_semi_bold">
        WHEN DO YOU EXPECT YOUR PROJECT TO START?*
      </h4>
      <div className="grid grid-cols-2  md:grid-cols-4    gap-4">
        {resident.map((opt) => (
          <div>
            <button
              onClick={() => {
                if (selectedresident === opt) {
                  setResident("");
                } else {
                  setResident(opt);
                }
              }}
              className={`${
                opt === selectedresident ? "bg-brand-blue-dark" : "bg-form-btn"
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

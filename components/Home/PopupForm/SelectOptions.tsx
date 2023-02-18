import React, { useEffect, useState } from "react";

export default function Selection({ option }: any) {
  const [selectedOption, setSelectedOption] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const checkIfSelected = () => {
    if (option === selectedOption) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };
  useEffect(() => {
    checkIfSelected();
  }, [option, selectedOption]);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setSelectedOption(option);
          }}
          className={`${
            option === selectedOption ? "bg-brand-blue-dark" : "bg-form-btn"
          }  info-btn bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer `}
        >
          <span className="font-isidorasans_regular whitespace-nowrap capitalize px-4">
            {option.toUpperCase()}
          </span>
        </button>
      </div>
    </>
  );
}

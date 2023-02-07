import React, { useState } from "react";

export default function PopupButton(props: any) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <button
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      className={` ${
        isSelected ? "bg-brand-blue-dark" : "bg-brand-blue "
      } info-btn bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer `}
    >
      <span className="font-isidorasans_regular whitespace-nowrap capitalize px-4">
        {props.label.toUpperCase()}
      </span>
    </button>
    /* <input
        id={props.label}
        type={"radio"}
        className="hidden"
        value={props.label}
        tabIndex={26}
      />
      <label
        htmlFor={props.label}
        className="cursor-pointer info-btn uppercase "
      >
        {props.label}
      </label>
    </> */
  );
}

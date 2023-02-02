import React, { useState } from "react";

export default function PopupButton(props: any) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <button
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      className={` ${
        isSelected ? "bg-brand-blue" : "bg-popup-button "
      }  py-1 text-sm rounded-full uppercase border  text-white   active:bg-brand-blue-dark`}
    >
      <span className="whitespace-nowrap px-4">{props.label}</span>
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

import React, { useState } from "react";

export default function PopupButton(props: any) {
  return (
    <button
      className={` ${
        props.isSelected ? "bg-brand-blue-dark" : "bg-form-btn "
      } info-btn bg-brand-blue hover:bg-brand-blue-dark hover:cursor-pointer `}
    >
      <span className="font-isidorasans_regular whitespace-nowrap capitalize px-4">
        {props.label.toUpperCase()}
      </span>
    </button>
  );
}

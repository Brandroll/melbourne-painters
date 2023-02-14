import cn from "classnames";
import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  type?: string;
  shadow?: boolean;
  variant?: "normal" | "solid" | "outline" | "line";
  dimension?: "small" | "medium" | "big";
}

const ContactInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      name,
      error,
      children,
      variant = "normal",
      dimension = "medium",
      shadow = false,
      disabled = false,
      type = "text",
      inputClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={"grid col-span-2 lg:col-span-1"}>
        {label && (
          <label
            htmlFor={name}
            className="text-brand-blue block mb-3 text-sm font-semibold leading-none text-body-dark"
          >
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={label}
          ref={ref}
          className="p-4 border-b-4 border-brand-blue rounded-md outline-none"
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
ContactInput.displayName = "Input";
export default ContactInput;

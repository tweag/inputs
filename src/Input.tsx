import * as React from "react";
import { CustomInputProps } from "./types";
import { asFormik } from "./asFormik";

export type InputProps = CustomInputProps<HTMLInputElement, string | null>;

export const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <input
      {...props}
      value={value === null ? "" : value}
      onChange={handleChange}
    />
  );
};

export const FormikInput = asFormik(Input);

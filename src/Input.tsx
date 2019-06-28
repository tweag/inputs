import * as React from "react";
import { CustomInputProps } from "./types";
import { asFormik } from "./asFormik";

export type InputProps = CustomInputProps<HTMLInputElement, any>;

export const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return <input {...props} onChange={handleChange} />;
};

export const FormikInput = asFormik(Input);

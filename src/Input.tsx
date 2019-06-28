import * as React from "react";
import { CustomInputProps } from "./types";
import { asFormik } from "./asFormik";

export type InputProps = CustomInputProps<HTMLInputElement, string | null>;

const isBlank = (value: any) => {
  return typeof value === 'string' && /^\s*$/.test(value);
};

export const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  const handleChange = React.useCallback(
    event => {
      const value = event.target.value;

      if (isBlank(value)) {
        onChange(null);
      } else {
        onChange(value);
      }
    },
    [onChange]
  );

  return <input {...props} value={value === null ? "" : value} onChange={handleChange} />;
};

export const FormikInput = asFormik(Input);

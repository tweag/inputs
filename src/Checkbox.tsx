import * as React from "react";
import { CustomInputProps } from "./types";
import { asFormik } from "./asFormik";

export type CheckboxProps = CustomInputProps<HTMLInputElement, boolean>;

export const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  value,
  ...props
}) => {
  const handleChange = React.useCallback(() => onChange(!value), [
    value,
    onChange
  ]);

  return (
    <input {...props} type="checkbox" checked={value} onChange={handleChange} />
  );
};

export const FormikCheckbox = asFormik(Checkbox);

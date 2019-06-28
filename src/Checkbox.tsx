import React, { useCallback } from "react";
import { CustomInputProps } from "./types";

export type CheckboxProps = CustomInputProps<HTMLInputElement, boolean>;

export const Checkbox = ({ onChange, value, ...props }: CheckboxProps) => {
  const handleChange = useCallback(() => onChange(!value), [value, onChange]);

  return (
    <input {...props} type="checkbox" checked={value} onChange={handleChange} />
  );
};

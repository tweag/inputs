import React, { useCallback } from "react";
import { CustomInputProps } from "./types";

export type InputProps = CustomInputProps<HTMLInputElement, any>;

export const Input = ({ onChange, ...props }: InputProps) => {
  const handleChange = useCallback(event => onChange(event.target.value), [
    onChange
  ]);

  return <input {...props} onChange={handleChange} />;
};

import * as React from "react";
import { CustomInputProps } from "./types";

export type InputProps = CustomInputProps<HTMLInputElement, any>;

export const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return <input {...props} onChange={handleChange} />;
};

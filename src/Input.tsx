import * as React from "react";
import { CustomInputProps } from "./types";

export type InputProps = CustomInputProps<"input", string | null>;

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

import React from "react";
import { CustomInputProps } from "./types";

export type FloatInputProps = CustomInputProps<"input", number | null>;

export const FloatInput: React.FC<FloatInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => {
      const value = parseFloat(event.target.value);
      isNaN(value) ? onChange(null) : onChange(value);
    },
    [onChange]
  );

  return (
    <input
      {...props}
      type="number"
      onChange={handleChange}
      value={value === null ? "" : value}
    />
  );
};

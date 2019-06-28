import React, { useCallback } from "react";
import { CustomInputProps } from "./types";

export type FloatInputProps = CustomInputProps<
  HTMLInputElement,
  number | null
>;

export const FloatInput = ({
  value,
  onChange,
  ...props
}: FloatInputProps) => {
  const handleChange = useCallback(
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

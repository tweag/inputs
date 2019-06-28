import React, { useCallback } from "react";
import { CustomInputProps } from "./types";

export type IntegerInputProps = CustomInputProps<
  HTMLInputElement,
  number | null
>;

export const IntegerInput = ({
  value,
  onChange,
  ...props
}: IntegerInputProps) => {
  const handleChange = useCallback(
    event => {
      const value = parseInt(event.target.value, 10);
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

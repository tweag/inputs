import React from "react";
import { DecimalInput } from "./DecimalInput";
import { CustomInputProps } from "./types";

const parse = (input: string | null): number | null => {
  if (input === null) {
    return null;
  }

  const value = parseFloat(input);
  return isNaN(value) ? null : value;
};

export type FloatInputProps = CustomInputProps<number | null>;

export const FloatInput: React.FC<FloatInputProps> = ({
  value,
  onChange,
  ...props
}) => (
  <DecimalInput
    value={value === null ? "" : value.toString()}
    onChange={value => onChange(parse(value))}
    keyboardType="numeric"
    {...props}
  />
);

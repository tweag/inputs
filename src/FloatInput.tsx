import React from "react";
import { DecimalInput } from "./DecimalInput";

interface Props {
  value: number | null;
  onChange: (value: number | null) => void;
  [key: string]: any;
}

const parse = (input: string | null): number | null => {
  const value = parseFloat(input);
  return isNaN(value) ? null : value;
};

export const FloatInput: React.FC<Props> = ({ value, onChange, ...props }) => (
  <DecimalInput
    value={value === null ? "" : value.toString()}
    onChange={value => onChange(parse(value))}
    {...props}
  />
);

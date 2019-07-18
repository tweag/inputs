import React from "react";
import { TextInput } from "react-native";
import { CustomInputProps } from "./types";

const clean = (input: string): string => {
  return input.replace(/[^0-9]/g, "");
};

const parse = (input: string): number | null => {
  const value = parseInt(input, 10);
  return isNaN(value) ? null : value;
};

export type IntegerInputProps = CustomInputProps<number | null>;

export const IntegerInput: React.FC<IntegerInputProps> = ({
  value,
  onChange,
  ...props
}) => (
  <TextInput
    value={value === null ? "" : value.toString()}
    onChangeText={value => onChange(parse(clean(value)))}
    keyboardType="numeric"
    {...props}
  />
);

import React from "react";
import { TextInput } from "react-native";
import { CustomInputProps } from "./types";

const parse = (value: string) => {
  return /^\s*$/.test(value) ? null : value;
};

export type InputProps = CustomInputProps<string | null>;

export const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => (
  <TextInput
    value={value === null ? "" : value}
    onChangeText={value => onChange(parse(value))}
    {...props}
  />
);

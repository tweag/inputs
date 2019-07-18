import React from "react";
import { TextInput } from "react-native";

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
  [key: string]: any;
}

const parse = (value: string) => {
  return /^\s*$/.test(value) ? null : value;
};

export const Input: React.FC<Props> = ({ value, onChange, ...props }) => (
  <TextInput
    value={value === null ? "" : value}
    onChangeText={value => onChange(parse(value))}
    {...props}
  />
);

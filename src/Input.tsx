import React from "react";
import { TextInput } from "react-native";

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
  [key: string]: any;
}

const isBlank = (value: any) => {
  return typeof value === "string" && /^\s*$/.test(value);
};

const Input: React.FC<Props> = ({ value, onChange, ...props }) => (
  <TextInput
    value={value === null ? "" : value}
    onChangeText={value => onChange(isBlank(value) ? null : value)}
    {...props}
  />
);

export default Input;

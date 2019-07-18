import React from "react";
import { Switch } from "react-native";
import { CustomInputProps } from "./types";

export type BooleanInputProps = CustomInputProps<boolean | null>;

export const BooleanInput: React.FC<BooleanInputProps> = ({
  value,
  onChange,
  ...props
}) => (
  <Switch value={value ? true : false} onValueChange={onChange} {...props} />
);

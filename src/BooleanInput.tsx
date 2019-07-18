import React from "react";
import { Switch } from "react-native";

interface Props {
  value: boolean | null;
  onChange: (value: boolean) => void;
  [key: string]: any;
}

export const BooleanInput = ({ value, onChange, ...props }) => (
  <Switch value={value} onValueChange={onChange} {...props} />
);

import React from "react";
import { Switch } from "react-native";

interface Props {
  value: boolean | null;
  onChange: (value: boolean) => void;
  [key: string]: any;
}

export const BooleanInput: React.FC<Props> = ({
  value,
  onChange,
  ...props
}) => (
  <Switch value={value ? true : false} onValueChange={onChange} {...props} />
);

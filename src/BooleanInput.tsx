import React from "react";
import { Switch, SwitchProps } from "react-native";

export interface BooleanInputProps
  extends Omit<Omit<SwitchProps, "value">, "onChangeValue"> {
  value: boolean | null;
  onChange: (value: boolean | null) => void;
}

export const BooleanInput: React.FC<BooleanInputProps> = ({
  value,
  onChange,
  ...props
}) => (
  <Switch value={value ? true : false} onValueChange={onChange} {...props} />
);

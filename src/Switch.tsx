import React from "react";
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from "react-native";
import { CustomInputProps } from "./types";

export type SwitchProps = CustomInputProps<
  RNSwitch,
  RNSwitchProps,
  boolean | null
>;

export const Switch: React.FC<SwitchProps> = ({
  value,
  onChange,
  innerRef,
  ...props
}) => (
  <RNSwitch
    ref={innerRef}
    value={Boolean(value)}
    onValueChange={onChange}
    {...props}
  />
);

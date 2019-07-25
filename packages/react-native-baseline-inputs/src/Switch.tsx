import * as React from "react";
import { Switch as RNSwitch } from "react-native";
import { SwitchProps } from "./types";
import { InputComponent } from "./utils";

export class Switch extends InputComponent<SwitchProps> {
  public render() {
    const { value, onChange, ...props } = this.props;

    return (
      <RNSwitch
        ref={this.inputRef}
        value={Boolean(value)}
        onValueChange={onChange}
        {...props}
      />
    );
  }
}

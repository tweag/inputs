import React from "react";
import { TextInput } from "react-native";
import { InputProps } from "./types";
import { InputComponent, isNil } from "./utils";

const parse = (value: string) => {
  return /^\s*$/.test(value) ? null : value;
};

export class Input extends InputComponent<InputProps> {
  private handleChange = (value: string) => {
    if (this.props.onChange) {
      this.props.onChange(parse(value));
    }
  };

  public render() {
    const { value, onChange: _onChange, ...props } = this.props;

    return (
      <TextInput
        ref={this.inputRef}
        onChangeText={this.handleChange}
        value={isNil(value) ? "" : value.toString()}
        {...props}
      />
    );
  }
}

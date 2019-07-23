import React, { Component } from "react";
import { TextInput, TextInputProps } from "react-native";
import { CustomInputProps } from "./types";

const parse = (value: string) => {
  return /^\s*$/.test(value) ? null : value;
};

export type InputProps = CustomInputProps<TextInputProps, string | null>;

export class Input extends Component<InputProps> {
  private handleChange = (value: string) => {
    this.props.onChange(parse(value));
  };

  public render() {
    const { value, onChange, innerRef, ...props } = this.props;

    return (
      <TextInput
        ref={innerRef}
        value={value === null ? "" : value.toString()}
        onChangeText={this.handleChange}
        {...props}
      />
    );
  }
}

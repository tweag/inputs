import React, { Component } from "react";
import { TextInput, TextInputProps } from "react-native";
import { CustomInputProps } from "./types";
import { styles } from "./styles";

const parse = (value: string) => {
  return /^\s*$/.test(value) ? null : value;
};

export type InputProps = CustomInputProps<
  TextInput,
  TextInputProps,
  string | null
>;

export class Input extends Component<InputProps> {
  private handleChange = (value: string) => {
    this.props.onChange(parse(value));
  };

  public render() {
    const { value, onChange, innerRef, style, ...props } = this.props;

    return (
      <TextInput
        ref={innerRef}
        style={[styles.input, style]}
        value={value === null ? "" : value.toString()}
        onChangeText={this.handleChange}
        {...props}
      />
    );
  }
}

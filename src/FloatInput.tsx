import React, { Component } from "react";
import { TextInputProps, TextInput } from "react-native";
import { DecimalInput } from "./DecimalInput";
import { CustomInputProps } from "./types";
import { styles } from "./styles";

const parse = (input: string | null): number | null => {
  if (input === null) {
    return null;
  }

  const value = parseFloat(input);
  return isNaN(value) ? null : value;
};

export type FloatInputProps = CustomInputProps<
  TextInput,
  TextInputProps,
  number | null
>;

export class FloatInput extends Component<FloatInputProps> {
  private handleChange = (value: string | null) => {
    this.props.onChange(parse(value));
  };

  public render() {
    const { value, onChange, innerRef, style, ...props } = this.props;

    return (
      <DecimalInput
        innerRef={innerRef}
        style={[styles.input, style]}
        value={value === null ? "" : value.toString()}
        onChange={this.handleChange}
        keyboardType="numeric"
        {...props}
      />
    );
  }
}

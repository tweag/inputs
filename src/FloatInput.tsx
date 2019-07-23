import React, { Component } from "react";
import { TextInputProps } from "react-native";
import { DecimalInput } from "./DecimalInput";
import { CustomInputProps } from "./types";

const parse = (input: string | null): number | null => {
  if (input === null) {
    return null;
  }

  const value = parseFloat(input);
  return isNaN(value) ? null : value;
};

export type FloatInputProps = CustomInputProps<TextInputProps, number | null>;

export class FloatInput extends Component<FloatInputProps> {
  private handleChange = (value: string | null) => {
    this.props.onChange(parse(value));
  };

  public render() {
    const { value, onChange, innerRef, ...props } = this.props;

    return (
      <DecimalInput
        innerRef={innerRef}
        value={value === null ? "" : value.toString()}
        onChange={this.handleChange}
        keyboardType="numeric"
        {...props}
      />
    );
  }
}

import React, { Component, createRef } from "react";
import { TextInput } from "react-native";
import { CustomInputProps } from "./types";

const clean = (input: string) => {
  return input.match(/^-?\d*\.?\d*/)![0];
};

const parse = (input: string) => {
  return ["", "-"].includes(input) ? null : input.replace(/\.$/, "");
};

export type DecimalInputProps = CustomInputProps<string | null>;

export class DecimalInput extends Component<DecimalInputProps> {
  private inputRef = createRef<TextInput>();

  private handleChange = (rawInput: string) => {
    const input = clean(rawInput);
    const value = parse(input);

    if (this.inputRef.current && input !== rawInput) {
      this.inputRef.current.setNativeProps({ text: input });
    }

    if (value !== this.props.value) {
      this.props.onChange(value);
    }
  };

  public render() {
    const { value, onChange, ...props } = this.props;

    return (
      <TextInput
        ref={this.inputRef}
        onChangeText={this.handleChange}
        keyboardType="numeric"
        {...props}
      />
    );
  }
}

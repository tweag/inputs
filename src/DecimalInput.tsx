import React, { Component } from "react";
import { TextInput, TextInputProps } from "react-native";
import { CustomInputProps } from "./types";

const clean = (input: string) => {
  return input.match(/^-?\d*\.?\d*/)![0];
};

const parse = (input: string) => {
  return ["", "-"].includes(input) ? null : input.replace(/\.$/, "");
};

export type DecimalInputProps = CustomInputProps<
  TextInput,
  TextInputProps,
  string | null
>;

export class DecimalInput extends Component<DecimalInputProps> {
  private inputRef: TextInput | null = null;

  private handleChange = (rawInput: string) => {
    const input = clean(rawInput);
    const value = parse(input);

    if (input !== rawInput && this.inputRef) {
      this.inputRef.setNativeProps({ text: input });
    }

    if (value !== this.props.value) {
      this.props.onChange(value);
    }
  };

  private handleRef = (input: TextInput | null) => {
    this.inputRef = input;

    if (this.props.innerRef) {
      this.props.innerRef(input);
    }
  };

  public render() {
    const { value, onChange, innerRef, ...props } = this.props;

    return (
      <TextInput
        ref={this.handleRef}
        onChangeText={this.handleChange}
        keyboardType="numeric"
        {...props}
      />
    );
  }
}

import React from "react";
import { TextInput } from "react-native";
import { InputComponent, CustomInputProps } from "./helpers";

const clean = (input: string) => {
  return input.match(/^-?\d*\.?\d*/)![0];
};

const parse = (input: string) => {
  return ["", "-"].includes(input) ? null : input.replace(/\.$/, "");
};

export type DecimalInputProps = CustomInputProps<string | null>;

export class DecimalInput extends InputComponent<DecimalInputProps> {
  private handleChange = (rawInput: string) => {
    const input = clean(rawInput);
    const value = parse(input);

    if (input !== rawInput) {
      this.setNativeProps({ text: input });
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

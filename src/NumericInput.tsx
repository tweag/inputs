import React from "react";
import { TextInput } from "react-native";
import { NumericInputProps } from "./types";
import { InputComponent, isNil } from "./utils";

const clean = (input: string) => {
  return input.match(/^-?\d*\.?\d*/)![0];
};

const parse = (input: string) => {
  return ["", "-"].includes(input) ? null : input.replace(/\.$/, "");
};

export class NumericInput extends InputComponent<NumericInputProps> {
  public componentDidMount() {
    if (!isNil(this.props.value)) {
      this.setNativeProps({ text: clean(this.props.value) });
    }
  }

  private handleChange = (rawInput: string) => {
    const input = clean(rawInput);
    const value = parse(input);

    if (input !== rawInput) {
      this.setNativeProps({ text: input });
    }

    if (value !== this.props.value && this.props.onChange) {
      this.props.onChange(value);
    }
  };

  public render() {
    const { value: _value, onChange: _onChange, ...props } = this.props;

    return (
      <TextInput
        ref={this.inputRef}
        keyboardType="numeric"
        onChangeText={this.handleChange}
        {...props}
      />
    );
  }
}

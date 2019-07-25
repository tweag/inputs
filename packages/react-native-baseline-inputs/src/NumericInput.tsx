import * as React from "react";
import { TextInput } from "react-native";
import { NumericInputProps } from "./types";
import { InputComponent, isNil } from "./utils";
import { styles } from "./styles";

const clean = (input: string) => {
  return input.match(/^-?\d*\.?\d*/)![0];
};

const parse = (input: string) => {
  return ["", "-"].includes(input) ? null : input.replace(/\.$/, "");
};

export class NumericInput extends InputComponent<NumericInputProps> {
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
    const { value, onChange: _onChange, style, ...props } = this.props;

    return (
      <TextInput
        ref={this.inputRef}
        keyboardType="numeric"
        autoCompleteType="off"
        autoCapitalize="none"
        autoCorrect={false}
        style={[styles.input, style]}
        defaultValue={isNil(value) ? "" : value}
        onChangeText={this.handleChange}
        {...props}
      />
    );
  }
}

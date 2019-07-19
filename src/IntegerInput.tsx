import React from "react";
import { TextInput } from "react-native";
import { CustomInputProps, InputComponent } from "./helpers";

const clean = (input: string): string => {
  return input.replace(/[^0-9]/g, "");
};

const parse = (input: string): number | null => {
  const value = parseInt(input, 10);
  return isNaN(value) ? null : value;
};

export type IntegerInputProps = CustomInputProps<number | null>;

export class IntegerInput extends InputComponent<IntegerInputProps> {
  private handleChange = (value: string) => {
    this.props.onChange(parse(clean(value)));
  }

  public render() {
    const { value, onChange, ...props } = this.props;

    return (
      <TextInput
        value={value === null ? "" : value.toString()}
        onChangeText={this.handleChange}
        keyboardType="numeric"
        {...props}
      />
    );
  }
}

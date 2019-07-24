import React from "react";
import { TextInput } from "react-native";
import { IntegerInputProps } from "./types";
import { InputComponent, isNil } from "./utils";

const clean = (input: string): string => {
  return input.replace(/[^0-9]/g, "");
};

const parse = (input: string): number | null => {
  const value = parseInt(input, 10);
  return isNaN(value) ? null : value;
};

export class IntegerInput extends InputComponent<IntegerInputProps> {
  private handleChange = (value: string) => {
    if (this.props.onChange) {
      this.props.onChange(parse(clean(value)));
    }
  };

  public render() {
    const { value, onChange: _onChange, ...props } = this.props;

    return (
      <TextInput
        ref={this.inputRef}
        keyboardType="numeric"
        onChangeText={this.handleChange}
        value={isNil(value) ? "" : value.toString()}
        {...props}
      />
    );
  }
}

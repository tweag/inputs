import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { CustomInputProps, InputComponent } from "./helpers";

const parse = (value: string) => {
  return /^\s*$/.test(value) ? null : value;
};

export type InputProps = CustomInputProps<TextInputProps, string | null>;

export class Input extends InputComponent<InputProps> {
  private handleChange = (value: string) => {
    this.props.onChange(parse(value));
  };

  public render() {
    const { value, onChange, ...props } = this.props;

    return (
      <TextInput
        ref={this.inputRef}
        value={value === null ? "" : value.toString()}
        onChangeText={this.handleChange}
        {...props}
      />
    );
  }
}

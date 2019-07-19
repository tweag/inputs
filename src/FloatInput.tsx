import React from "react";
import { DecimalInput } from "./DecimalInput";
import { CustomInputProps, InputComponent } from "./helpers";

const parse = (input: string | null): number | null => {
  if (input === null) {
    return null;
  }

  const value = parseFloat(input);
  return isNaN(value) ? null : value;
};

export type FloatInputProps = CustomInputProps<number | null>;

export class FloatInput extends InputComponent<FloatInputProps> {
  private handleChange = (value: string | null) => {
    this.props.onChange(parse(value))
  }

  public render() {
    const { value, onChange, ...props } = this.props;

    return (
      <DecimalInput
        value={value === null ? "" : value.toString()}
        onChange={this.handleChange}
        keyboardType="numeric"
        {...props}
      />
    );
  }
}

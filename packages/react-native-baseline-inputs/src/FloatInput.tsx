import * as React from "react";
import { NumericInput } from "./NumericInput";
import { FloatInputProps } from "./types";
import { InputComponent, isNil } from "./utils";

const parse = (input: string | null): number | null => {
  if (input === null) {
    return null;
  }

  const value = parseFloat(input);
  return isNaN(value) ? null : value;
};

export class FloatInput extends InputComponent<FloatInputProps> {
  private handleChange = (value: string | null) => {
    if (this.props.onChange) {
      this.props.onChange(parse(value));
    }
  };

  public render() {
    const { value, onChange: _onChange, ...props } = this.props;

    return (
      <NumericInput
        ref={this.inputRef}
        onChange={this.handleChange}
        value={isNil(value) ? "" : value.toString()}
        {...props}
      />
    );
  }
}

import * as React from "react";
import { TextInput } from "react-native";
import { IntegerInputProps } from "./types";
import { InputComponent, isNil } from "./utils";
import { styles } from "./styles";

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
    const { value, onChange: _onChange, style, ...props } = this.props;

    return (
      <TextInput
        ref={this.inputRef}
        keyboardType="numeric"
        autoCompleteType="off"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={this.handleChange}
        style={[styles.input, style]}
        value={isNil(value) ? "" : value.toString()}
        {...props}
      />
    );
  }
}

import * as React from "react";
import { TextInput } from "react-native";
import { InputProps } from "./types";
import { InputComponent, isNil } from "./utils";
import { styles } from "./styles";

const parse = (value: string) => {
  return /^\s*$/.test(value) ? null : value;
};

export class Input extends InputComponent<InputProps> {
  private handleChange = (value: string) => {
    if (this.props.onChange) {
      this.props.onChange(parse(value));
    }
  };

  public render() {
    const { value, onChange: _onChange, style, ...props } = this.props;

    return (
      <TextInput
        ref={this.inputRef}
        autoCapitalize="none"
        onChangeText={this.handleChange}
        style={[styles.input, style]}
        value={isNil(value) ? "" : value.toString()}
        {...props}
      />
    );
  }
}

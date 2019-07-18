import React, { Component } from "react";
import { TextInput } from "react-native";

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
  [key: string]: any;
}

const clean = (input: string) => {
  return input.match(/^-?\d*\.?\d*/)[0];
};

const parse = (input: string) => {
  return ["", "-"].includes(input) ? null : input.replace(/\.$/, "");
};

export class DecimalInput extends Component<Props> {
  private inputRef = React.createRef<TextInput>();

  private handleChange = (rawInput: string) => {
    const input = clean(rawInput);
    const value = parse(input);

    if (input !== rawInput) {
      this.inputRef.current.setNativeProps({ text: input });
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
        {...props}
      />
    );
  }
}

import React, { Component } from "react";
import { TextInput } from "react-native";

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
  [key: string]: any;
}

const RE_NUMBER = /^-?\d*\.?\d*/;

export class DecimalInput extends Component<Props> {
  private inputRef = React.createRef<TextInput>();

  private emitChange(value: string | null) {
    if (value !== this.props.value) {
      this.props.onChange(value);
    }
  }

  private handleChange = (rawInput: string) => {
    const [input] = rawInput.match(RE_NUMBER);

    if (input !== rawInput) {
      this.inputRef.current.setNativeProps({ text: input });
    }

    if (["", "-"].includes(input)) {
      return this.emitChange(null);
    }

    if (input.charAt(input.length - 1) !== ".") {
      return this.emitChange(input);
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

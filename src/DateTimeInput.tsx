import React, { Component } from "react";
import format from "date-fns/format";
import parse from "date-fns/parse";
import { TextInput, TextInputProps } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { CustomInputProps } from "./types";
import { styles } from "./styles";

const PRETTY = "M/D/YYYY h:mmA";

interface State {
  isVisible: boolean;
}

export type DateTimeInputProps = CustomInputProps<
  TextInput,
  TextInputProps,
  string | null
>;

export class DateTimeInput extends Component<DateTimeInputProps, State> {
  public state = {
    isVisible: false
  };

  public focus = () => {
    this.setState({ isVisible: true });
  };

  public blur = () => {
    this.setState({ isVisible: false });
  };

  private handleConfirm = (value: Date) => {
    this.props.onChange(value.toISOString());
    this.setState({ isVisible: false });
  };

  public render() {
    const { isVisible } = this.state;
    const { value, onChange, innerRef, style, ...props } = this.props;

    return (
      <>
        <TextInput
          ref={innerRef}
          style={[styles.input, style]}
          editable={false}
          onTouchStart={this.focus}
          value={value ? format(value, PRETTY) : ""}
          {...props}
        />

        <DateTimePicker
          mode="datetime"
          date={value === null ? undefined : parse(value)}
          isVisible={isVisible}
          onCancel={this.blur}
          onConfirm={this.handleConfirm}
        />
      </>
    );
  }
}

import React, { Component } from "react";
import format from "date-fns/format";
import parse from "date-fns/parse";
import { TextInput, TextInputProps } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { CustomInputProps } from "./types";

const PRETTY = "M/D/YYYY";
const ISO = "YYYY-MM-DD";

interface State {
  isVisible: boolean;
}

export type DateInputProps = CustomInputProps<TextInputProps, string | null>;

export class DateInput extends Component<DateInputProps, State> {
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
    this.props.onChange(format(value, ISO));
    this.setState({ isVisible: false });
  };

  public render() {
    const { isVisible } = this.state;
    const { value, onChange, innerRef, ...props } = this.props;

    return (
      <>
        <TextInput
          ref={innerRef}
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

import React from "react";
import format from "date-fns/format";
import parse from "date-fns/parse";
import { TextInput, TextInputProps } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { CustomInputProps, InputComponent } from "./helpers";

const PRETTY = "M/D/YYYY";
const ISO = "YYYY-MM-DD";

interface State {
  isVisible: boolean;
}

export type DateInputProps = CustomInputProps<TextInputProps, string | null>;

export class DateInput extends InputComponent<DateInputProps, State> {
  public state = {
    isVisible: false
  };

  public focus = () => {
    super.focus();
    this.setState({ isVisible: true });
  };

  public blur = () => {
    super.blur();
    this.setState({ isVisible: false });
  };

  private handleConfirm = (value: Date) => {
    this.props.onChange(format(value, ISO));
    this.setState({ isVisible: false });
  };

  public render() {
    const { isVisible } = this.state;
    const { value, onChange, ...props } = this.props;

    return (
      <>
        <TextInput
          ref={this.inputRef}
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

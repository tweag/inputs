import React, { Component } from "react";
import format from "date-fns/format";
import parse from "date-fns/parse";
import { TextInput } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const PRETTY = "M/D/YYYY";
const ISO = "YYYY-MM-DD";

interface Props {
  value: string | null;
  onChange: (value: string) => void;
  [key: string]: any;
}

interface State {
  isVisible: boolean;
}

export class DateInput extends Component<Props, State> {
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
    const { value, onChange, ...props } = this.props;

    return (
      <>
        <TextInput
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

import React, { Component } from "react";
import { format, parse, isValid } from "date-fns";
import { TouchableWithoutFeedback, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { DateTimeInputProps } from "./types";
import { isNil } from "./utils";

interface State {
  isVisible: boolean;
}

const parseDateTime = (value: string): Date | null => {
  const parsed = parse(value);
  return isValid(parsed) ? parsed : null;
};

const parseTime = (value: string): Date | null => {
  const today = format(new Date(), "YYYY-MM-DD");
  return parseDateTime(`${today}T${value}`);
};

const parseDateTimeLoose = (value: Date | string | null): Date | null => {
  if (typeof value === "string") {
    return parseDateTime(value) || parseTime(value);
  }

  return value;
};

export class DateTimeInput extends Component<DateTimeInputProps, State> {
  public static defaultProps = {
    mode: "datetime",
    labelFormat: "M/D/YYYY h:mmA",
    valueFormat: "YYYY-MM-DDTHH:mm:ss.SSSZ"
  };

  public state = {
    isVisible: false
  };

  public focus() {
    this.setState({ isVisible: true });
  }

  public blur() {
    this.setState({ isVisible: false });
  }

  private handlePress = () => {
    this.focus();
  };

  private handleConfirm = (value: Date) => {
    if (this.props.onChangeDate) {
      this.props.onChangeDate(value);
    }

    if (this.props.onChange) {
      this.props.onChange(format(value, this.props.valueFormat));
    }

    this.blur();
  };

  private handleCancel = () => {
    this.blur();

    if (this.props.onSubmitEditing) {
      this.props.onSubmitEditing();
    }
  };

  public render() {
    const { isVisible } = this.state;
    const {
      value,
      style,
      mode,
      labelFormat,
      onChange: _onChange,
      onChangeDate: _onChangeDate
    } = this.props;

    const date = parseDateTimeLoose(value);

    return (
      <>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Text style={style}>
            {isNil(date) ? "" : format(date, labelFormat)}
          </Text>
        </TouchableWithoutFeedback>

        <DateTimePicker
          mode={mode}
          date={date || undefined}
          isVisible={isVisible}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </>
    );
  }
}

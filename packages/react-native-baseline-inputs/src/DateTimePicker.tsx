import * as React from "react";
import { format, parse, isValid } from "date-fns";
import { default as RNDateTimePicker } from "react-native-modal-datetime-picker";
import { DateTimePickerProps } from "./types";
import { isNil } from "./utils";
import { StaticInput } from "./StaticInput";

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

interface State {
  isVisible: boolean;
}

export class DateTimePicker extends React.Component<
  DateTimePickerProps,
  State
> {
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

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  private handleConfirm = (value: Date) => {
    if (this.props.onChangeDate) {
      this.props.onChangeDate(value);
    }

    if (this.props.onChange) {
      this.props.onChange(format(value, this.props.valueFormat));
    }

    this.blur();

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  private handleCancel = () => {
    this.blur();

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  public render() {
    const { isVisible } = this.state;
    const {
      value,
      style,
      labelFormat,
      inputProps,
      containerStyle,
      onFocus: _onFocus,
      onBlur: _onBlur,
      onChange: _onChange,
      onChangeDate: _onChangeDate,
      ...props
    } = this.props;

    const date = parseDateTimeLoose(value);

    return (
      <>
        <StaticInput
          onPress={this.handlePress}
          value={isNil(date) ? "" : format(date, labelFormat)}
          style={style}
          containerStyle={containerStyle}
          {...inputProps}
        />

        <RNDateTimePicker
          date={date || undefined}
          isVisible={isVisible}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          {...props}
        />
      </>
    );
  }
}

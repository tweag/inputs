import * as React from "react";
import { DatePickerProps } from "./types";
import { InputComponent } from "./utils";
import { DateTimePicker } from "./DateTimePicker";

export class DatePicker extends InputComponent<DatePickerProps> {
  public static defaultProps = {
    mode: "date",
    labelFormat: "M/D/YYYY",
    valueFormat: "YYYY-MM-DD"
  };

  public render() {
    return <DateTimePicker ref={this.inputRef} {...this.props} />;
  }
}

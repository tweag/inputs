import * as React from "react";
import { TimePickerProps } from "./types";
import { InputComponent } from "./utils";
import { DateTimePicker } from "./DateTimePicker";

export class TimePicker extends InputComponent<TimePickerProps> {
  public static defaultProps = {
    mode: "time",
    labelFormat: "h:mmA",
    valueFormat: "HH:mm:ss.SSSZ"
  };

  public render() {
    return <DateTimePicker ref={this.inputRef} {...this.props} />;
  }
}

import React from "react";
import { TimeInputProps } from "./types";
import { InputComponent } from "./utils";
import { DateTimeInput } from "./DateTimeInput";

export class TimeInput extends InputComponent<TimeInputProps> {
  public static defaultProps = {
    mode: "time",
    labelFormat: "h:mmA",
    valueFormat: "HH:mm:ss.SSSZ"
  };

  public render() {
    return <DateTimeInput ref={this.inputRef} {...this.props} />;
  }
}

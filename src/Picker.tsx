import React from "react";
import { Platform } from "react-native";
import PickerDefault from "react-native-picker-select";
import { InputComponent } from "./utils";
import { PickerProps } from "./types";

const buildItem = (item: any) => {
  if (typeof item === "string" || typeof item === "number") {
    return { key: item, value: item, label: item.toString() };
  }

  return item;
};

export class Picker<T> extends InputComponent<PickerProps<T>> {
  private handleChange = (value: T) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  public render() {
    const {
      value,
      style,
      items = [],
      onChange: _onChange,
      ...props
    } = this.props;

    return (
      <PickerDefault
        ref={this.inputRef}
        value={value}
        items={items!.map(buildItem)}
        onValueChange={this.handleChange}
        style={Platform.select<any>({
          ios: { inputIOS: style },
          android: { inputAndroid: style }
        })}
        {...props}
      />
    );
  }
}

import React from "react";
import { CustomInputProps } from "./types";
import { ViewStyle, StyleProp, Platform } from "react-native";
import PickerDefault, {
  Item,
  PickerProps as PickerPropsDefault
} from "react-native-picker-select";

export type PickerItem<T> = T extends string | number
  ? Item & { value: T } | T
  : Item & { value: T };

export type PickerProps<T> = CustomInputProps<
  PickerDefault,
  Omit<PickerPropsDefault, "items">,
  T | null
> & {
  items: Array<PickerItem<T>>;
  style?: StyleProp<ViewStyle>;
  styles?: object;
};

const buildItem = (item: any) =>
  ["string", "number"].includes(typeof item)
    ? { key: item, value: item, label: item.toString() }
    : item;

export function Picker<T>({
  value,
  onChange,
  innerRef,
  items,
  style,
  styles,
  ...props
}: PickerProps<T>) {
  return (
    <PickerDefault
      ref={innerRef}
      value={value}
      items={items.map(buildItem)}
      onValueChange={value => onChange(value)}
      style={Platform.select<any>({
        ios: { inputIOS: style, ...styles },
        android: { inputAndroid: style, ...styles }
      })}
      {...props}
    />
  );
}

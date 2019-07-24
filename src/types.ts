import { DateTimePickerProps as RNDateTimePickerProps } from "react-native-modal-datetime-picker";
import {
  StyleProp,
  SwitchProps as RNSwitchProps,
  TextInputProps as RNTextInputProps,
  TextStyle
} from "react-native";

/**
 * Base Props
 */

type BaseSwitchProps = Omit<
  RNSwitchProps,
  "value" | "onChange" | "onValueChange"
>;

type BaseInputProps = Omit<
  RNTextInputProps,
  "value" | "onChange" | "onChangeText"
>;

type BaseDateTimePickerProps = Omit<
  RNDateTimePickerProps,
  "date" | "isVisible" | "onCancel" | "onConfirm"
>;

/**
 * Custom inputs
 */

export interface SwitchProps extends BaseSwitchProps {
  value: boolean | null;
  onChange?: (value: boolean) => void;
}

export interface InputProps extends BaseInputProps {
  value: string | null;
  onChange?: (value: string | null) => void;
}

/**
 * Numeric inputs
 */

export interface IntegerInputProps extends BaseInputProps {
  value: number | null;
  onChange?: (value: number | null) => void;
}

export type NumericInputProps = InputProps;
export type FloatInputProps = IntegerInputProps;

/**
 * Date inputs
 */

export interface DateTimeInputProps extends BaseDateTimePickerProps {
  autoFocus?: boolean;
  labelFormat?: string;
  valueFormat?: string;
  value: Date | string | null;
  style?: StyleProp<TextStyle>;
  onChange?: (value: string) => void;
  onChangeDate?: (value: Date) => void;
  onSubmitEditing?: () => void;
}

export type DateInputProps = DateTimeInputProps;
export type TimeInputProps = DateTimeInputProps;

/**
 * Picker
 */

export interface PickerItemObject<T> {
  value: T;
  label: string;
  color?: string;
  key?: string | number;
}

export type PickerItem<T> = T extends string | number
  ? PickerItemObject<T> | T
  : PickerItemObject<T>;

export interface PickerProps<T> {
  value: T | null;
  items: Array<PickerItem<T>>;
  style?: StyleProp<TextStyle>;
  onChange?: (value: T) => void;
  onSubmitEditing?: () => void;
}

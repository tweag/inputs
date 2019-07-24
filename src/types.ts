import { DateTimePickerProps as RNDateTimePickerProps } from "react-native-modal-datetime-picker";
import {
  ModalProps as RNModalProps,
  PickerProps as RNPickerProps,
  StyleProp,
  SwitchProps as RNSwitchProps,
  TextInputProps as RNTextInputProps,
  ViewStyle
} from "react-native";

/**
 * Switch
 */

type BaseSwitchProps = Omit<
  RNSwitchProps,
  "value" | "onChange" | "onValueChange"
>;

export interface SwitchProps extends BaseSwitchProps {
  value: boolean | null;
  onChange?: (value: boolean) => void;
}

/**
 * Input
 */

type BaseInputProps = Omit<
  RNTextInputProps,
  "value" | "onChange" | "onChangeText"
>;

export interface InputProps extends BaseInputProps {
  value: string | null;
  onChange?: (value: string | null) => void;
}

export interface StaticInputProps extends BaseInputProps {
  value: string;
  onPress?: () => void;
}

export interface IntegerInputProps extends BaseInputProps {
  value: number | null;
  onChange?: (value: number | null) => void;
}

export type NumericInputProps = InputProps;
export type FloatInputProps = IntegerInputProps;

/**
 * Date picker
 */

type BaseDateTimePickerProps = Omit<
  RNDateTimePickerProps,
  "date" | "isVisible" | "onCancel" | "onConfirm"
>;

export interface DateTimePickerProps extends BaseDateTimePickerProps {
  labelFormat?: string;
  valueFormat?: string;
  value: Date | string | null;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: string) => void;
  onChangeDate?: (value: Date) => void;
  inputProps?: Partial<StaticInputProps>;
}

export type DatePickerProps = DateTimePickerProps;
export type TimePickerProps = DateTimePickerProps;

/**
 * Modal
 */

export interface ModalContext {
  isVisible: boolean;
  orientation: string;
  open: () => void;
  close: () => void;
}

export interface ModalProps extends RNModalProps {
  render: (context: ModalContext) => React.ReactNode;
  children: (context: ModalContext) => React.ReactNode;
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  backdropStyle?: StyleProp<ViewStyle>;
}

/**
 * Picker
 */

type BasePickerProps = Omit<
  RNPickerProps,
  "value" | "onChange" | "onValueChange"
>;

export interface PickerItemObject<T> {
  value: T;
  label: string;
  color?: string;
  key?: string | number;
}

export type PickerItem<T> = T extends string | number
  ? PickerItemObject<T> | T
  : PickerItemObject<T>;

export interface PickerProps<T> extends BasePickerProps {
  value: T | null;
  items: Array<PickerItem<T>>;
  onChange?: (value: T) => void;
  style?: StyleProp<ViewStyle>;
  pickerStyle?: StyleProp<ViewStyle>;
  modalStyle?: StyleProp<ViewStyle>;
  modalProps?: Partial<ModalProps>;
  inputProps?: Partial<StaticInputProps>;
}

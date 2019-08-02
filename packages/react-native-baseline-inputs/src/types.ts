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
  containerStyle?: StyleProp<ViewStyle>;
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
  testID?: string;
  value: Date | string | null;
  labelFormat?: string;
  valueFormat?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputProps?: Partial<StaticInputProps>;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  onChangeDate?: (value: Date) => void;
}

export type DatePickerProps = DateTimePickerProps;
export type TimePickerProps = DateTimePickerProps;

/**
 * Modal
 */

export interface ModalProps extends RNModalProps {
  isVisible: boolean;
  body: React.ReactNode;
  children: React.ReactNode;
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

export interface PickerItemObject {
  value: any;
  label: string;
  color?: string;
  key?: string | number;
}

export type PickerItem = PickerItemObject | string | number;

export interface PickerProps extends BasePickerProps {
  value: any;
  items: Array<PickerItem>;
  style?: StyleProp<ViewStyle>;
  pickerStyle?: StyleProp<ViewStyle>;
  modalStyle?: StyleProp<ViewStyle>;
  modalProps?: Partial<ModalProps>;
  inputProps?: Partial<StaticInputProps>;
  onModalClose?: () => void;
  onModalOpen?: () => void;
  onChange?: (value: any) => void;
}

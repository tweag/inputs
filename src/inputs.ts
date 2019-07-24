import { createInput, CreateInputProps } from "./createInput";
import * as Baseline from "react-native-baseline-inputs";

/**
 * Input
 */
export type InputProps = CreateInputProps<
  typeof Baseline.Input,
  Baseline.InputProps
>;
export const Input = createInput<InputProps>({
  touchEvent: "onBlur",
  displayName: "FormikInput",
  component: Baseline.Input,
});

/**
 * Switch
 */
export type SwitchProps = CreateInputProps<
  typeof Baseline.Switch,
  Baseline.SwitchProps
>;
export const Switch = createInput<SwitchProps>({
  touchEvent: "onChange",
  displayName: "FormikSwitch",
  component: Baseline.Switch
});

/**
 * Picker
 */
export type PickerProps<T> = CreateInputProps<
  typeof Baseline.Picker,
  Baseline.PickerProps<T>
>;
export const Picker = createInput<PickerProps<any>>({
  touchEvent: "onChange",
  displayName: "FormikPicker",
  component: Baseline.Picker,
});

/**
 * Numeric input
 */
export type NumericInputProps = CreateInputProps<
  typeof Baseline.NumericInput,
  Baseline.NumericInputProps
>;
export const NumericInput = createInput<NumericInputProps>({
  touchEvent: "onBlur",
  displayName: "FormikNumericInput",
  component: Baseline.NumericInput,
});

/**
 * Integer input
 */
export type IntegerInputProps = CreateInputProps<
  typeof Baseline.IntegerInput,
  Baseline.IntegerInputProps
>;
export const IntegerInput = createInput<IntegerInputProps>({
  touchEvent: "onBlur",
  displayName: "FormikIntegerInput",
  component: Baseline.IntegerInput,
});

/**
 * Float input
 */
export type FloatInputProps = CreateInputProps<
  typeof Baseline.FloatInput,
  Baseline.FloatInputProps
>;
export const FloatInput = createInput<FloatInputProps>({
  touchEvent: "onBlur",
  displayName: "FormikFloatInput",
  component: Baseline.FloatInput,
});

/**
 * Date picker
 */
export type DatePickerProps = CreateInputProps<
  typeof Baseline.DatePicker,
  Baseline.DatePickerProps
>;
export const DatePicker = createInput<DatePickerProps>({
  touchEvent: "onBlur",
  displayName: "FormikDatePicker",
  component: Baseline.DatePicker,
});

/**
 * Time picker
 */
export type TimePickerProps = CreateInputProps<
  typeof Baseline.TimePicker,
  Baseline.TimePickerProps
>;
export const TimePicker = createInput<TimePickerProps>({
  touchEvent: "onBlur",
  displayName: "FormikTimePicker",
  component: Baseline.TimePicker,
});

/**
 * DateTime picker
 */
export type DateTimePickerProps = CreateInputProps<
  typeof Baseline.DateTimePicker,
  Baseline.DateTimePickerProps
>;
export const DateTimePicker = createInput<DateTimePickerProps>({
  touchEvent: "onBlur",
  displayName: "FormikDateTimePicker",
  component: Baseline.DateTimePicker,
});

import * as Baseline from "react-native-baseline-inputs";
import { CustomFieldProps, createCustomField } from "./createCustomField";

export type InputProps = CustomFieldProps<typeof Baseline.Input>;
export const Input = createCustomField(Baseline.Input, "FormikInput");

export type SwitchProps = CustomFieldProps<typeof Baseline.Switch>;
export const Switch = createCustomField(Baseline.Switch, "FormikSwitch");

export type PickerProps = CustomFieldProps<typeof Baseline.Picker>;
export const Picker = createCustomField(Baseline.Picker, "FormikPicker");

export type NumericInputProps = CustomFieldProps<typeof Baseline.NumericInput>;
export const NumericInput = createCustomField(
  Baseline.NumericInput,
  "FormikNumericInput"
);

export type IntegerInputProps = CustomFieldProps<typeof Baseline.IntegerInput>;
export const IntegerInput = createCustomField(
  Baseline.IntegerInput,
  "FormikIntegerInput"
);

export type FloatInputProps = CustomFieldProps<typeof Baseline.FloatInput>;
export const FloatInput = createCustomField(
  Baseline.FloatInput,
  "FormikFloatInput"
);

export type DatePickerProps = CustomFieldProps<typeof Baseline.DatePicker>;
export const DatePicker = createCustomField(
  Baseline.DatePicker,
  "FormikDatePicker"
);

export type TimePickerProps = CustomFieldProps<typeof Baseline.DateTimePicker>;
export const TimePicker = createCustomField(
  Baseline.TimePicker,
  "FormikTimePicker"
);

export type DateTimePickerProps = CustomFieldProps<
  typeof Baseline.DateTimePicker
>;
export const DateTimePicker = createCustomField(
  Baseline.DateTimePicker,
  "FormikDateTimePicker"
);

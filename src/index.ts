import { FieldProps } from "formik";
import * as Baseline from "react-native-baseline-inputs";
import { createField } from "./createField";
import { CustomFieldProps } from "./types";

const getInputProps = ({ form, field }: FieldProps) => ({
  onChange: (value: any) => form.setFieldValue(field.name, value),
  onBlur: () => form.setFieldTouched(field.name, true)
});

const getFallbackProps = ({ form, field }: FieldProps) => ({
  onChange: (value: any) => {
    form.setFieldValue(field.name, value);
    form.setFieldTouched(field.name, true);
  }
});

/**
 * Input
 */
export type InputProps = CustomFieldProps<typeof Baseline.Input>;
export const Input = createField<typeof Baseline.Input>({
  displayName: "FormikInput",
  component: Baseline.Input,
  getProps: getInputProps
});

/**
 * Switch
 */
export type SwitchProps = CustomFieldProps<typeof Baseline.Switch>;
export const Switch = createField<typeof Baseline.Switch>({
  displayName: "FormikSwitch",
  component: Baseline.Switch,
  getProps: getFallbackProps
});

/**
 * Picker
 */
export type PickerProps = CustomFieldProps<typeof Baseline.Picker>;
export const Picker = createField<typeof Baseline.Picker>({
  displayName: "FormikPicker",
  component: Baseline.Picker,
  getProps: getFallbackProps
});

/**
 * Numeric input
 */
export type NumericInputProps = CustomFieldProps<typeof Baseline.NumericInput>;
export const NumericInput = createField<typeof Baseline.NumericInput>({
  displayName: "FormikNumericInput",
  component: Baseline.NumericInput,
  getProps: getInputProps
});

/**
 * Integer input
 */
export type IntegerInputProps = CustomFieldProps<typeof Baseline.IntegerInput>;
export const IntegerInput = createField<typeof Baseline.IntegerInput>({
  displayName: "FormikIntegerInput",
  component: Baseline.IntegerInput,
  getProps: getInputProps
});

/**
 * Float input
 */
export type FloatInputProps = CustomFieldProps<typeof Baseline.FloatInput>;
export const FloatInput = createField<typeof Baseline.FloatInput>({
  displayName: "FormikFloatInput",
  component: Baseline.FloatInput,
  getProps: getInputProps
});

/**
 * Date picker
 */
export type DatePickerProps = CustomFieldProps<typeof Baseline.DatePicker>;
export const DatePicker = createField<typeof Baseline.DatePicker>({
  displayName: "FormikDatePicker",
  component: Baseline.DatePicker,
  getProps: getFallbackProps
});

/**
 * Time picker
 */
export type TimePickerProps = CustomFieldProps<typeof Baseline.TimePicker>;
export const TimePicker = createField<typeof Baseline.TimePicker>({
  displayName: "FormikTimePicker",
  component: Baseline.TimePicker,
  getProps: getFallbackProps
});

/**
 * DateTime picker
 */
export type DateTimePickerProps = CustomFieldProps<
  typeof Baseline.DateTimePicker
>;
export const DateTimePicker = createField<typeof Baseline.DateTimePicker>({
  displayName: "FormikDateTimePicker",
  component: Baseline.DateTimePicker,
  getProps: getFallbackProps
});

import { Platform } from "react-native";
import { createField, CustomFieldProps } from "create-formik-field";
import * as Baseline from "react-native-baseline-inputs";

/**
 * Input
 */
export type InputProps = CustomFieldProps<typeof Baseline.Input>;
export const Input = createField<typeof Baseline.Input>({
  displayName: "FormikInput",
  component: Baseline.Input
});

/**
 * Switch
 */
export type SwitchProps = CustomFieldProps<typeof Baseline.Switch>;
export const Switch = createField<typeof Baseline.Switch>({
  displayName: "FormikSwitch",
  component: Baseline.Switch,
  getProps: ({ form, field }) => ({
    onChange: value => {
      form.setFieldValue(field.name, value);
      form.setFieldTouched(field.name, true);
    }
  })
});

/**
 * Picker
 */
export type PickerProps = CustomFieldProps<typeof Baseline.Picker>;
export const Picker = createField<typeof Baseline.Picker>({
  displayName: "FormikPicker",
  component: Baseline.Picker,
  getProps: Platform.select({
    android: ({ form, field }) => ({
      onChange: value => {
        form.setFieldValue(field.name, value);
        form.setFieldTouched(field.name, true);
      }
    }),
    ios: ({ form, field }) => ({
      onChange: value => form.setFieldValue(field.name, value),
      onModalClose: () => form.setFieldTouched(field.name, true)
    })
  })
});

/**
 * Numeric input
 */
export type NumericInputProps = CustomFieldProps<typeof Baseline.NumericInput>;
export const NumericInput = createField<typeof Baseline.NumericInput>({
  displayName: "FormikNumericInput",
  component: Baseline.NumericInput
});

/**
 * Integer input
 */
export type IntegerInputProps = CustomFieldProps<typeof Baseline.IntegerInput>;
export const IntegerInput = createField<typeof Baseline.IntegerInput>({
  displayName: "FormikIntegerInput",
  component: Baseline.IntegerInput
});

/**
 * Float input
 */
export type FloatInputProps = CustomFieldProps<typeof Baseline.FloatInput>;
export const FloatInput = createField<typeof Baseline.FloatInput>({
  displayName: "FormikFloatInput",
  component: Baseline.FloatInput
});

/**
 * Date picker
 */
export type DatePickerProps = CustomFieldProps<typeof Baseline.DatePicker>;
export const DatePicker = createField<typeof Baseline.DatePicker>({
  displayName: "FormikDatePicker",
  component: Baseline.DatePicker
});

/**
 * Time picker
 */
export type TimePickerProps = CustomFieldProps<typeof Baseline.TimePicker>;
export const TimePicker = createField<typeof Baseline.TimePicker>({
  displayName: "FormikTimePicker",
  component: Baseline.TimePicker
});

/**
 * DateTime picker
 */
export type DateTimePickerProps = CustomFieldProps<
  typeof Baseline.DateTimePicker
>;
export const DateTimePicker = createField<typeof Baseline.DateTimePicker>({
  displayName: "FormikDateTimePicker",
  component: Baseline.DateTimePicker
});

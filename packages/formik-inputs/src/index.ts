import * as React from "react";
import * as Baseline from "react-baseline-inputs";
import { createField, CustomFieldProps } from "create-formik-field";

export type InputProps = CustomFieldProps<typeof Baseline.Input>;
export const Input = createField<typeof Baseline.Input>({
  component: Baseline.Input,
  displayName: "FormikInput"
});

export type CheckboxProps = CustomFieldProps<typeof Baseline.Checkbox>;
export const Checkbox = createField({
  component: Baseline.Checkbox,
  displayName: "FormikCheckbox"
});

export type SelectProps = CustomFieldProps<typeof Baseline.Select>;
export const Select = createField({
  component: Baseline.Select,
  displayName: "FormikSelect"
});

export type IntegerInputProps = CustomFieldProps<typeof Baseline.IntegerInput>;
export const IntegerInput = createField({
  component: Baseline.IntegerInput,
  displayName: "FormikIntegerInput"
});

export type FloatInputProps = CustomFieldProps<typeof Baseline.FloatInput>;
export const FloatInput = createField({
  component: Baseline.FloatInput,
  displayName: "FormikFloatInput"
});

export type FileInputProps = CustomFieldProps<typeof Baseline.FileInput>;
export const FileInput = createField({
  component: Baseline.FileInput,
  displayName: "FormikFileInput"
});

export type DateInputProps = CustomFieldProps<typeof Baseline.DateInput>;
export const DateInput = createField({
  component: Baseline.DateInput,
  displayName: "FormikDateInput"
});

export type DateTimeInputProps = CustomFieldProps<
  typeof Baseline.DateTimeInput
>;
export const DateTimeInput = createField({
  component: Baseline.DateTimeInput,
  displayName: "FormikDateTimeInput"
});

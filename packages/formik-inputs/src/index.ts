import * as React from "react";
import * as Baseline from "react-baseline-inputs";
import { createField, CustomFieldProps } from "create-formik-field";

export type InputProps = CustomFieldProps<typeof Baseline.Input>;
export type CheckboxProps = CustomFieldProps<typeof Baseline.Checkbox>;
export type SelectProps = CustomFieldProps<typeof Baseline.Select>;
export type IntegerInputProps = CustomFieldProps<typeof Baseline.IntegerInput>;
export type FloatInputProps = CustomFieldProps<typeof Baseline.FloatInput>;
export type FileInputProps = CustomFieldProps<typeof Baseline.FileInput>;
export type DateInputProps = CustomFieldProps<typeof Baseline.DateInput>;
export type DateTimeInputProps = CustomFieldProps<
  typeof Baseline.DateTimeInput
>;

/**
 * An HTML input, but with the following benefits:
 *
 *   * It coerces a `null` value prop to an empty string.
 *   * It casts empty input to `null` when changed.
 *
 */
export const Input = createField<typeof Baseline.Input>({
  component: Baseline.Input,
  displayName: "FormikInput"
});

/**
 * An HTML checkbox input, but with the following benefits:
 *
 *   * It accepts boolean values.
 *   * It treats `null` values as unchecked.
 *   * It always emits a boolean value when changed.
 */
export const Checkbox = createField({
  component: Baseline.Checkbox,
  displayName: "FormikCheckbox"
});

/**
 * An HTML select, but with the following benefits:
 *
 *   * It coerces a `null` value prop to an empty string.
 *   * It accepts a `placeholder`.
 *   * It allows you to pass in an array of options.
 */
export const Select = createField({
  component: Baseline.Select,
  displayName: "FormikSelect"
});

export const IntegerInput = createField({
  component: Baseline.IntegerInput,
  displayName: "FormikIntegerInput"
});

export const FloatInput = createField({
  component: Baseline.FloatInput,
  displayName: "FormikFloatInput"
});

export const FileInput = createField({
  component: Baseline.FileInput,
  displayName: "FormikFileInput"
});

export const DateInput = createField({
  component: Baseline.DateInput,
  displayName: "FormikDateInput"
});

export const DateTimeInput = createField({
  component: Baseline.DateTimeInput,
  displayName: "FormikDateTimeInput"
});

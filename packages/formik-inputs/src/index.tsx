import * as Baseline from "react-baseline-inputs";
import { CustomFieldProps, createCustomField } from "./createCustomField";

export type InputProps = CustomFieldProps<typeof Baseline.Input>;
export const Input = createCustomField(Baseline.Input, "FormikInput");

export type CheckboxProps = CustomFieldProps<typeof Baseline.Checkbox>;
export const Checkbox = createCustomField(Baseline.Checkbox, "FormikCheckbox");

export type SelectProps = CustomFieldProps<typeof Baseline.Select>;
export const Select = createCustomField(Baseline.Select, "FormikSelect");

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

export type FileInputProps = CustomFieldProps<typeof Baseline.FileInput>;
export const FileInput = createCustomField(
  Baseline.FileInput,
  "FormikFileInput"
);

export type DateInputProps = CustomFieldProps<typeof Baseline.DateInput>;
export const DateInput = createCustomField(
  Baseline.DateInput,
  "FormikDateInput"
);

export type DateTimeInputProps = CustomFieldProps<
  typeof Baseline.DateTimeInput
>;
export const DateTimeInput = createCustomField(
  Baseline.DateTimeInput,
  "FormikDateTimeInput"
);

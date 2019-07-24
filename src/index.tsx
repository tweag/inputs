import * as Baseline from "react-native-baseline-inputs";
import { CustomFieldProps, createCustomField } from "./createCustomField";

export type InputProps = CustomFieldProps<typeof Baseline.Input>;
export const Input = createCustomField(Baseline.Input, "FormikInput");

export type SwitchProps = CustomFieldProps<typeof Switch>;
export const Switch = createCustomField(Baseline.Switch, "FormikCheckbox");

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

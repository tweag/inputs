import * as React from "react";
import { useField } from "./useField";
import {
  Checkbox as BCheckbox,
  DateInput as BDateInput,
  DateTimeInput as BDateTimeInput,
  Field as BField,
  FileInput as BFileInput,
  FloatInput as BFloatInput,
  IntegerInput as BIntegerInput,
  Select as BSelect,
  TextArea as BTextArea,
  TextInput as BTextInput
} from "react-baseline-inputs";
import {
  CheckboxProps,
  DateInputProps,
  DateTimeInputProps,
  FieldProps,
  FileInputProps,
  FloatInputProps,
  IntegerInputProps,
  SelectProps,
  TextAreaProps,
  TextInputProps
} from "./types";

export const Checkbox: React.FC<CheckboxProps> = props => (
  <BCheckbox {...useField(props)} />
);

export const DateInput: React.FC<DateInputProps> = props => (
  <BDateInput {...useField(props)} />
);

export const DateTimeInput: React.FC<DateTimeInputProps> = props => (
  <BDateTimeInput {...useField(props)} />
);

export const Field: React.FC<FieldProps> = props => (
  <BField {...useField(props)} />
);

export const FileInput: React.FC<FileInputProps> = props => (
  <BFileInput {...useField<any>(props)} />
);

export const FloatInput: React.FC<FloatInputProps> = props => (
  <BFloatInput {...useField(props)} />
);

export const IntegerInput: React.FC<IntegerInputProps> = props => (
  <BIntegerInput {...useField(props)} />
);

export const Select: React.FC<SelectProps> = props => (
  <BSelect {...useField(props)} />
);

export const TextArea: React.FC<TextAreaProps> = props => (
  <BTextArea {...useField(props)} />
);

export const TextInput: React.FC<TextInputProps> = props => (
  <BTextInput {...useField(props)} />
);

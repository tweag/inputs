import * as React from "react";
import { useField } from "./useField";
import {
  Checkbox as BCheckbox,
  CheckboxList as BCheckboxList,
  DateInput as BDateInput,
  DateTimeInput as BDateTimeInput,
  Field as BField,
  FileInput as BFileInput,
  FileListInput as BFileListInput,
  FloatInput as BFloatInput,
  Input as BInput,
  IntegerInput as BIntegerInput,
  MaskedInput as BMaskedInput,
  RadioGroup as BRadioGroup,
  Select as BSelect,
  TextArea as BTextArea,
  TimeInput as BTimeInput,
  ToggleButton as BToggleButton,
  FieldSet
} from "react-baseline-inputs";
import {
  CheckboxListProps,
  CheckboxProps,
  DateInputProps,
  DateTimeInputProps,
  FieldProps,
  FileInputProps,
  FileListInputProps,
  FloatInputProps,
  InputProps,
  IntegerInputProps,
  MaskedInputProps,
  RadioGroupProps,
  SelectProps,
  TextAreaProps,
  TimeInputProps,
  ToggleButtonProps
} from "./types";

export const Checkbox: React.FC<CheckboxProps> = props => (
  <BCheckbox {...useField(props)} />
);

export const CheckboxList: React.FC<CheckboxListProps> = props => (
  <BCheckboxList {...useField(props)} />
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
  <BFileInput {...useField(props)} />
);

export const FileListInput: React.FC<FileListInputProps> = props => (
  <BFileListInput {...useField(props)} />
);

export const FloatInput: React.FC<FloatInputProps> = props => (
  <BFloatInput {...useField(props)} />
);

export const Input: React.FC<InputProps> = props => (
  <BInput {...useField(props)} />
);

export const IntegerInput: React.FC<IntegerInputProps> = props => (
  <BIntegerInput {...useField(props)} />
);

export const MaskedInput: React.FC<MaskedInputProps> = props => (
  <BMaskedInput {...useField(props)} />
);

export const RadioGroup: React.FC<RadioGroupProps> = props => (
  <BRadioGroup {...useField(props)} />
);

export const Select: React.FC<SelectProps> = props => (
  <BSelect {...useField(props)} />
);

export const TextArea: React.FC<TextAreaProps> = props => (
  <BTextArea {...useField(props)} />
);

export const TimeInput: React.FC<TimeInputProps> = props => (
  <BTimeInput {...useField(props)} />
);

export const ToggleButton: React.FC<ToggleButtonProps> = props => (
  <BToggleButton {...useField(props)} />
);

export { FieldSet };

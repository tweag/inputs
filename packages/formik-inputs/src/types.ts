import { FieldValidator } from "formik";
import {
  CheckboxListProps as BCheckboxListProps,
  CheckboxProps as BCheckboxProps,
  DateInputProps as BDateInputProps,
  DateTimeInputProps as BDateTimeInputProps,
  FieldProps as BFieldProps,
  FileInputProps as BFileInputProps,
  FileListInputProps as BFileListInputProps,
  FloatInputProps as BFloatInputProps,
  InputProps as BInputProps,
  IntegerInputProps as BIntegerInputProps,
  MaskedInputProps as BMaskedInputProps,
  RadioGroupProps as BRadioGroupProps,
  SelectProps as BSelectProps,
  TextAreaProps as BTextAreaProps,
  TimeInputProps as BTimeInputProps,
  ToggleButtonProps as BToggleButtonProps
} from "react-baseline-inputs";

export interface FieldConfig {
  name: string;
  validate?: FieldValidator;
}

type AsFormik<T> = FieldConfig &
  Omit<T, "value" | "onChange" | "onBlur" | "error" | "touched">;

export type CheckboxListProps = AsFormik<BCheckboxListProps>;
export type CheckboxProps = AsFormik<BCheckboxProps>;
export type DateInputProps = AsFormik<BDateInputProps>;
export type DateTimeInputProps = AsFormik<BDateTimeInputProps>;
export type FieldProps = AsFormik<BFieldProps>;
export type FileInputProps = AsFormik<BFileInputProps>;
export type FileListInputProps = AsFormik<BFileListInputProps>;
export type FloatInputProps = AsFormik<BFloatInputProps>;
export type InputProps = AsFormik<BInputProps>;
export type IntegerInputProps = AsFormik<BIntegerInputProps>;
export type MaskedInputProps = AsFormik<BMaskedInputProps>;
export type RadioGroupProps = AsFormik<BRadioGroupProps>;
export type SelectProps = AsFormik<BSelectProps>;
export type TextAreaProps = AsFormik<BTextAreaProps>;
export type TimeInputProps = AsFormik<BTimeInputProps>;
export type ToggleButtonProps = AsFormik<BToggleButtonProps>;

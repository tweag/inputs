import { FieldValidator } from "formik";
import {
  CheckboxProps as BCheckboxProps,
  CheckboxListProps as BCheckboxListProps,
  DateInputProps as BDateInputProps,
  DateTimeInputProps as BDateTimeInputProps,
  FieldProps as BFieldProps,
  FileInputProps as BFileInputProps,
  FileListInputProps as BFileListInputProps,
  FloatInputProps as BFloatInputProps,
  InputProps as BInputProps,
  IntegerInputProps as BIntegerInputProps,
  RadioGroupProps as BRadioGroupProps,
  SelectProps as BSelectProps,
  TextAreaProps as BTextAreaProps,
  ToggleButtonProps as BToggleButtonProps
} from "react-baseline-inputs";

export interface FieldConfig {
  name: string;
  validate?: FieldValidator;
}

type AsFormik<T> = FieldConfig &
  Omit<T, "value" | "onChange" | "onBlur" | "error" | "touched">;

export type CheckboxProps = AsFormik<BCheckboxProps>;
export type CheckboxListProps = AsFormik<BCheckboxListProps>;
export type DateInputProps = AsFormik<BDateInputProps>;
export type DateTimeInputProps = AsFormik<BDateTimeInputProps>;
export type FileInputProps = AsFormik<BFileInputProps>;
export type FileListInputProps = AsFormik<BFileListInputProps>;
export type FieldProps = AsFormik<BFieldProps>;
export type FloatInputProps = AsFormik<BFloatInputProps>;
export type InputProps = AsFormik<BInputProps>;
export type IntegerInputProps = AsFormik<BIntegerInputProps>;
export type RadioGroupProps = AsFormik<BRadioGroupProps>;
export type SelectProps = AsFormik<BSelectProps>;
export type TextAreaProps = AsFormik<BTextAreaProps>;
export type ToggleButtonProps = AsFormik<BToggleButtonProps>;

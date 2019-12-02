import * as React from "react";
import { MaskedInputProps as TextMaskProps } from "react-text-mask";

export interface FieldTheme {
  field?: string | undefined;
  fieldInline?: string | undefined;
  fieldSuccess?: string | undefined;
  fieldError?: string | undefined;
  fieldTouched?: string | undefined;
  fieldLarge?: string | undefined;
  fieldSmall?: string | undefined;
  fieldDisabled?: string | undefined;

  input?: string | undefined;
  inputSuccess?: string | undefined;
  inputError?: string | undefined;
  inputTouched?: string | undefined;
  inputInline?: string | undefined;
  inputLarge?: string | undefined;
  inputSmall?: string | undefined;
  inputDisabled?: string | undefined;

  label?: string | undefined;
  labelSuccess?: string | undefined;
  labelError?: string | undefined;
  labelTouched?: string | undefined;
  labelInline?: string | undefined;
  labelLarge?: string | undefined;
  labelSmall?: string | undefined;
  labelDisabled?: string | undefined;

  help?: string | undefined;
  helpInline?: string | undefined;
  helpSmall?: string | undefined;
  helpLarge?: string | undefined;

  error?: string | undefined;
  errorInline?: string | undefined;
  errorSmall?: string | undefined;
  errorLarge?: string | undefined;

  requiredIndicator?: string | undefined;
}

export interface FieldSetTheme {
  fieldSet?: string | undefined;
  fieldSetError?: string | undefined;
  fieldSetSuccess?: string | undefined;
  fieldSetTouched?: string | undefined;
  fieldSetLarge?: string | undefined;
  fieldSetSmall?: string | undefined;

  legend?: string | undefined;
  legendError?: string | undefined;
  legendSuccess?: string | undefined;
  legendTouched?: string | undefined;
  legendLarge?: string | undefined;
  legendSmall?: string | undefined;

  help?: string | undefined;
  helpSmall?: string | undefined;
  helpLarge?: string | undefined;

  error?: string | undefined;
  errorSmall?: string | undefined;
  errorLarge?: string | undefined;

  requiredIndicator?: string | undefined;
}

export interface Theme {
  input: FieldTheme;
  checkbox: FieldTheme;
  dateInput: FieldTheme;
  dateTimeInput: FieldTheme;
  field: FieldTheme;
  fieldSet: FieldSetTheme;
  fileInput: FieldTheme;
  floatInput: FieldTheme;
  integerInput: FieldTheme;
  radioGroup: FieldTheme;
  select: FieldTheme;
  textarea: FieldTheme;
  timeInput: FieldTheme;
  toggleButton: FieldTheme;
}

export interface FieldInputProps {
  id?: string;
  inline?: boolean;
  large?: boolean;
  small?: boolean;
  touched?: boolean;
  success?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
  help?: React.ReactNode;
  label?: React.ReactNode;
  labelPosition?: "before" | "after";
  wrapper?: boolean;
  theme?: FieldTheme;
  required?: boolean;
  requiredIndicator?: React.ReactNode;
}

export interface OptionProps {
  value: string;
  label?: string;
  key?: any;
  disabled?: boolean;
}

type HTMLProps<T> = OmitConflicts<React.HTMLProps<T>>;
type OmitConflicts<T> = Omit<
  T,
  "value" | "onChange" | "label" | "multiple" | "render"
>;
type OmitRequired<T> = Omit<T, "required" | "requiredIndicator">;

export interface ValueProps<V, C = V> {
  value: V;
  onChange: (value: C) => void;
}

export interface FieldProps extends FieldInputProps {
  className?: string;
  render: (props: object) => React.ReactNode;
}

export interface FieldSetProps extends HTMLProps<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  help?: React.ReactNode;
  className?: string;
  error?: React.ReactNode;
  theme?: FieldSetTheme;
  large?: boolean;
  small?: boolean;
  success?: boolean;
  touched?: boolean;
  wrapper?: boolean;
  required?: boolean;
  requiredIndicator?: React.ReactNode;
}

export type CheckboxProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<boolean | null>;

export type CheckboxListProps = FieldInputProps &
  FieldSetProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string[] | null> & {
    options?: Array<OptionProps | string>;
  };

export type DateInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type DateTimeInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type FileInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> & {
    value?: any;
    onChange: (value: File | null) => void;
  };

export type FileListInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> & {
    value?: any;
    onChange: (value: FileList) => void;
  };

export type FloatInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<number | null>;

export type InputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type IntegerInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<number | null>;

export type MaskedInputProps = FieldInputProps &
  OmitConflicts<TextMaskProps> &
  ValueProps<string | null>;

export type RadioGroupProps = FieldInputProps &
  FieldSetProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null> & {
    options?: Array<OptionProps | string>;
  };

export type SelectProps = FieldInputProps &
  HTMLProps<HTMLSelectElement> &
  ValueProps<string | null> & {
    placeholder?: string;
    options?: Array<OptionProps | string>;
  };

export type TextAreaProps = FieldInputProps &
  HTMLProps<HTMLTextAreaElement> &
  ValueProps<string | null>;

export type TimeInputProps = FieldInputProps &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type ToggleButtonProps = OmitRequired<
  FieldInputProps & HTMLProps<HTMLButtonElement> & ValueProps<boolean | null>
>;

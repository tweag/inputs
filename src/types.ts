import * as React from "react";

export interface Theme {
  field?: string | undefined;
  fieldInline?: string | undefined;
  fieldSuccess?: string | undefined;
  fieldError?: string | undefined;
  fieldTouched?: string | undefined;
  fieldLarge?: string | undefined;
  fieldSmall?: string | undefined;

  input?: string | undefined;
  inputSuccess?: string | undefined;
  inputError?: string | undefined;
  inputTouched?: string | undefined;
  inputInline?: string | undefined;
  inputLarge?: string | undefined;
  inputSmall?: string | undefined;

  label?: string | undefined;
  labelSuccess?: string | undefined;
  labelError?: string | undefined;
  labelTouched?: string | undefined;
  labelInline?: string | undefined;
  labelLarge?: string | undefined;
  labelSmall?: string | undefined;

  help?: string | undefined;
  error?: string | undefined;
}

export interface FieldInputProps {
  id?: string;
  inline?: boolean;
  large?: boolean;
  small?: boolean;
  touched?: boolean;
  success?: boolean;
  error?: React.ReactNode;
  help?: React.ReactNode;
  label?: React.ReactNode;
  wrapper?: boolean;
  theme?: Theme;
}

export interface ValueProps<V> {
  value: V;
  onChange: (value: V) => void;
}

type HTMLProps<T> = Omit<
  React.HTMLProps<T>,
  "value" | "onChange" | "label" | "multiple"
>;
type InputProps<V, E = HTMLInputElement> = FieldInputProps &
  HTMLProps<E> &
  ValueProps<V>;

export interface FieldProps extends FieldInputProps {
  render: (props: object) => React.ReactNode;
}

export type TextInputProps = InputProps<string | null>;
export type IntegerInputProps = InputProps<number | null>;
export type CheckboxProps = InputProps<boolean | null>;
export type DateInputProps = InputProps<string | null>;
export type DateTimeInputProps = InputProps<string | null>;
export type FloatInputProps = InputProps<number | null>;
export type TextAreaProps = InputProps<string | null, HTMLTextAreaElement>;

export interface SelectOption extends React.HTMLProps<HTMLOptionElement> {
  value: string;
  label: string;
  key?: any;
}

export interface SelectProps
  extends InputProps<string | null, HTMLSelectElement> {
  placeholder?: string;
  options?: Array<SelectOption | string>;
}

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

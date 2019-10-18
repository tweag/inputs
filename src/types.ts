import * as React from "react";

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

  fieldClassName?: string;
  fieldInlineClassName?: string;
  fieldValidClassName?: string;
  fieldInvalidClassName?: string;
  fieldTouchedClassName?: string;
  fieldLargeClassName?: string;
  fieldSmallClassName?: string;

  inputClassName?: string;
  inputValidClassName?: string;
  inputInvalidClassName?: string;
  inputTouchedClassName?: string;
  inputInlineClassName?: string;
  inputLargeClassName?: string;
  inputSmallClassName?: string;

  labelClassName?: string;
  labelInlineClassName?: string;
  labelLargeClassName?: string;
  labelSmallClassName?: string;

  helpClassName?: string;
  errorClassName?: string;
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

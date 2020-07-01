import * as React from "react";

export interface Theme {
  field?: string;
  input?: string;
  label?: string;
  help?: string;
  error?: string;
  fieldset?: string;
  legend?: string;
}

export interface ThemeContext {
  type: string;
  valid: boolean;
  touched: boolean;
  inline: boolean;
  condensed: boolean;
  populated: boolean;
  large: boolean;
  small: boolean;
  disabled: boolean;
}

export interface FieldInputProps {
  id?: string;
  inline?: boolean;
  large?: boolean;
  small?: boolean;
  touched?: boolean;
  success?: boolean;
  disabled?: boolean;
  condensed?: boolean;
  error?: React.ReactNode;
  help?: React.ReactNode;
  label?: React.ReactNode;
  labelPosition?: "before" | "after";
  wrapper?: boolean;
  theme?: (context: ThemeContext) => Theme;
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

export interface ValueProps<V, C = V> {
  value: V;
  onChange: (value: C) => void;
}

export interface FieldProps extends FieldInputProps {
  className?: string;
  populated?: boolean;
  render: (props: object) => React.ReactNode;
}

export interface FieldSetProps extends HTMLProps<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  large?: boolean;
  small?: boolean;
  success?: boolean;
  touched?: boolean;
  wrapper?: boolean;
  theme?: Theme;
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

export type ToggleButtonProps = FieldInputProps &
  HTMLProps<HTMLButtonElement> &
  ValueProps<boolean | null>;

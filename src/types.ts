import * as React from "react";

export interface ThemeClassNames {
  field?: string;
  input?: string;
  label?: string;
  help?: string;
  error?: string;
}

export interface ThemeContext {
  type: string;
  success: boolean;
  error: boolean;
  touched: boolean;
  inline: boolean;
  condensed: boolean;
  populated: boolean;
  large: boolean;
  small: boolean;
  disabled: boolean;
}

export type Theme = (context: ThemeContext) => ThemeClassNames;

export interface FieldInputProps {
  id: string;
  disabled: boolean;
  className?: string;
  "aria-labelledby"?: string;
  [key: string]: any;
}

export interface FieldConfig<V> {
  value: V;
  onChange(value: V): void;
  id?: any;
  className?: string;
  theme?: Theme;
  label?: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  labelProps?: React.HTMLProps<HTMLLabelElement>;
  helpProps?: React.HTMLProps<HTMLSpanElement>;
  errorProps?: React.HTMLProps<HTMLSpanElement>;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  inline?: boolean;
  small?: boolean;
  large?: boolean;
  condensed?: boolean;
  touched?: boolean;
  disabled?: boolean;
  success?: boolean;
  [key: string]: any;
}

export interface Field<V> {
  value: V;
  onChange(value: V): void;
  label?: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  getInputProps(): FieldInputProps;
  getLabelProps(): React.HTMLProps<HTMLLabelElement>;
  getHelpProps(): React.HTMLProps<HTMLSpanElement>;
  getErrorProps(): React.HTMLProps<HTMLSpanElement>;
  getContainerProps(): React.HTMLProps<HTMLDivElement>;
}

export interface OptionProps {
  value: string;
  label?: string;
  key?: any;
  disabled?: boolean;
}

export type HTMLProps<T> = Omit<
  React.HTMLProps<T>,
  "value" | "onChange" | "label"
>;

export type InputProps = FieldConfig<string> & HTMLProps<HTMLInputElement>;
export type CheckboxProps = FieldConfig<boolean> & HTMLProps<HTMLInputElement>;

export type TextAreaProps = FieldConfig<string> &
  HTMLProps<HTMLTextAreaElement>;

export type SelectProps = FieldConfig<string> &
  HTMLProps<HTMLSelectElement> & {
    placeholder?: string;
    options?: Array<OptionProps | string>;
  };

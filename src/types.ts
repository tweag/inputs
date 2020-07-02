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

export interface FieldConfig {
  id?: any;
  value?: any;
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
}

export interface FieldInputProps {
  id: string;
  disabled: boolean;
  className?: string;
  "aria-labelledby"?: string;
}

export interface Field<T> {
  label?: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  getInputProps(): FieldInputProps & T;
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

export type HTMLProps<T> = Omit<React.HTMLProps<T>, "label">;
export type InputProps = FieldConfig & HTMLProps<HTMLInputElement>;
export type CheckboxProps = InputProps;
export type RadioProps = InputProps;
export type TextAreaProps = FieldConfig & HTMLProps<HTMLTextAreaElement>;

export type SelectProps = FieldConfig &
  HTMLProps<HTMLSelectElement> & {
    placeholder?: string;
    options?: Array<OptionProps | string>;
  };

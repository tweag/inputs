import * as React from "react";

export interface ThemeProps {
  valid?: boolean;
  invalid?: boolean;
  touched?: boolean;
  inline?: boolean;
  condensed?: boolean;
  populated?: boolean;
  large?: boolean;
  small?: boolean;
  disabled?: boolean;
}

export interface ClassNames {
  fieldset?: string;
  legend?: string;
  field?: string;
  input?: string;
  label?: string;
  help?: string;
  error?: string;
}

export interface Theme {
  getClassNames(type: string, props: ThemeProps): ClassNames;
}

export interface FieldInputProps {
  id: string;
  disabled: boolean;
  className?: string;
  "aria-labelledby"?: string;
  [key: string]: any;
}

export interface FieldConfig<V> extends ThemeProps {
  value: V;
  onChange(value: V): void;
  id?: any;
  className?: string;
  theme?: Theme;
  label?: React.ReactNode;
  labelProps?: React.HTMLProps<HTMLLabelElement>;
  help?: React.ReactNode;
  helpProps?: React.HTMLProps<HTMLSpanElement>;
  error?: React.ReactNode;
  errorProps?: React.HTMLProps<HTMLSpanElement>;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  inline?: boolean;
  small?: boolean;
  large?: boolean;
  condensed?: boolean;
  touched?: boolean;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
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

export interface FieldSetProps
  extends ThemeProps,
    React.HTMLProps<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  legendProps?: React.HTMLProps<HTMLLegendElement>;
  help?: React.ReactNode;
  helpProps?: React.HTMLProps<HTMLSpanElement>;
  error?: React.ReactNode;
  errorProps?: React.HTMLProps<HTMLSpanElement>;
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

export type CheckboxItemProps<T> = FieldConfig<T[]> &
  HTMLProps<HTMLInputElement> & { represents: T };

export type RadioProps<T> = FieldConfig<T> &
  HTMLProps<HTMLInputElement> & { represents: T };

export type TextAreaProps = FieldConfig<string> &
  HTMLProps<HTMLTextAreaElement>;

export type SelectProps = FieldConfig<string> &
  HTMLProps<HTMLSelectElement> & {
    placeholder?: string;
    options?: Array<OptionProps | string>;
  };

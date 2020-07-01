import * as React from "react";

export interface ThemeClassNames {
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
  error?: React.ReactNode;
  labelProps?: React.HTMLProps<HTMLLabelElement>;
  errorProps?: React.HTMLProps<HTMLSpanElement>;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  fieldSetProps?: React.HTMLProps<HTMLFieldSetElement>;
  legendProps?: React.HTMLProps<HTMLLegendElement>;
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
  error?: React.ReactNode;
  getInputProps(): FieldInputProps & T;
  getLabelProps(): React.HTMLProps<HTMLLabelElement>;
  getErrorProps(): React.HTMLProps<HTMLSpanElement>;
  getContainerProps(): React.HTMLProps<HTMLDivElement>;
  getFieldsetProps(): React.HTMLProps<HTMLFieldSetElement>;
  getLegendProps(): React.HTMLProps<HTMLLegendElement>;
}

export interface OptionProps {
  value: string;
  label?: string;
  key?: any;
  disabled?: boolean;
}

export type HTMLProps<T> = Omit<
  React.HTMLProps<T>,
  "value" | "onChange" | "label" | "multiple" | "render"
>;

export interface ValueProps<V, C = V> {
  value: V;
  onChange: (value: C) => void;
}

export type CheckboxProps = FieldConfig &
  HTMLProps<HTMLInputElement> &
  ValueProps<boolean | null>;

export type CheckboxListProps = FieldConfig &
  HTMLProps<HTMLInputElement> &
  ValueProps<string[] | null> & {
    options?: Array<OptionProps | string>;
  };

export type DateInputProps = FieldConfig &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type DateTimeInputProps = FieldConfig &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type FileInputProps = FieldConfig &
  HTMLProps<HTMLInputElement> & {
    value?: any;
    onChange: (value: File | null) => void;
  };

export type FileListInputProps = FieldConfig &
  HTMLProps<HTMLInputElement> & {
    value?: any;
    onChange: (value: FileList) => void;
  };

export type FloatInputProps = FieldConfig &
  HTMLProps<HTMLInputElement> &
  ValueProps<number | null>;

export type InputProps = FieldConfig &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type IntegerInputProps = FieldConfig &
  HTMLProps<HTMLInputElement> &
  ValueProps<number | null>;

export type RadioGroupProps = FieldConfig &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null> & {
    options?: Array<OptionProps | string>;
  };

export type SelectProps = FieldConfig &
  HTMLProps<HTMLSelectElement> &
  ValueProps<string | null> & {
    placeholder?: string;
    options?: Array<OptionProps | string>;
  };

export type TextAreaProps = FieldConfig &
  HTMLProps<HTMLTextAreaElement> &
  ValueProps<string | null>;

export type TimeInputProps = FieldConfig &
  HTMLProps<HTMLInputElement> &
  ValueProps<string | null>;

export type ToggleButtonProps = FieldConfig &
  HTMLProps<HTMLButtonElement> &
  ValueProps<boolean | null>;

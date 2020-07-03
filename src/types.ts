import * as React from "react";

export interface FieldInputProps {
  id: string;
  "aria-labelledby"?: string;
  [key: string]: any;
}

export interface FieldConfig<V> {
  value: V;
  onChange(value: V): void;
  id?: any;
  label?: React.ReactNode;
  labelProps?: React.HTMLProps<HTMLLabelElement>;
  labelClassName?: string;
  help?: React.ReactNode;
  helpProps?: React.HTMLProps<HTMLSpanElement>;
  helpClassName?: string;
  error?: React.ReactNode;
  errorProps?: React.HTMLProps<HTMLSpanElement>;
  errorClassName?: string;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  containerClassName?: string;
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

export interface FieldSetProps extends React.HTMLProps<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  legendProps?: React.HTMLProps<HTMLLegendElement>;
  legendClassName?: string;
  help?: React.ReactNode;
  helpProps?: React.HTMLProps<HTMLSpanElement>;
  helpClassName?: string;
  error?: React.ReactNode;
  errorProps?: React.HTMLProps<HTMLSpanElement>;
  errorClassName?: string;
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

export interface Config<P> {
  displayName: string;
  getInputProps(props: InputProps & P): InputProps;
  getSelectProps(props: SelectProps & P): SelectProps;
  getTextAreaProps(props: TextAreaProps & P): TextAreaProps;
  getRadioProps(props: RadioProps<unknown> & P): RadioProps<unknown>;
  getCheckboxProps(props: CheckboxProps & P): CheckboxProps;
  getCheckboxItemProps(
    props: CheckboxItemProps<unknown> & P
  ): CheckboxItemProps<unknown>;
}

import * as React from "react";

interface HTMLProps<T> extends React.HTMLProps<T> {
  "data-testid"?: string;
}

export type Element = React.ReactElement<any, any> | null;

export interface FC<Props = {}> {
  (props: Props): Element;
  displayName?: string;
}

export interface FieldInputProps {
  id: string;
  "aria-labelledby"?: string;
  [key: string]: any;
}

export interface FieldConfig {
  id?: any;
  label?: React.ReactNode;
  labelProps?: HTMLProps<HTMLLabelElement>;
  labelClassName?: string;
  help?: React.ReactNode;
  helpProps?: HTMLProps<HTMLSpanElement>;
  helpClassName?: string;
  error?: React.ReactNode;
  errorProps?: HTMLProps<HTMLSpanElement>;
  errorClassName?: string;
  fieldProps?: HTMLProps<HTMLDivElement>;
  fieldClassName?: string;
}

export interface FieldProps extends FieldConfig {
  [key: string]: any;
}

export interface Field {
  label?: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  getInputProps(): FieldInputProps;
  getLabelProps(): HTMLProps<HTMLLabelElement>;
  getHelpProps(): HTMLProps<HTMLSpanElement>;
  getErrorProps(): HTMLProps<HTMLSpanElement>;
  getFieldProps(): HTMLProps<HTMLDivElement>;
}

export interface FieldSetProps extends HTMLProps<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  legendProps?: HTMLProps<HTMLLegendElement>;
  legendClassName?: string;
  help?: React.ReactNode;
  helpProps?: HTMLProps<HTMLSpanElement>;
  helpClassName?: string;
  error?: React.ReactNode;
  errorProps?: HTMLProps<HTMLSpanElement>;
  errorClassName?: string;
}

export interface OptionProps {
  value: string;
  label?: string;
  key?: any;
  disabled?: boolean;
}

export type HTMLField<Element> = FieldConfig &
  Omit<HTMLProps<Element>, "value" | "onChange" | "label">;

export interface InputProps extends HTMLField<HTMLInputElement> {
  value?: string;
  onChange?: (value: string) => void;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export interface FileInputProps extends HTMLField<HTMLInputElement> {
  value?: any;
  onChange?: (value: File) => void;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export interface FileListInputProps extends HTMLField<HTMLInputElement> {
  value?: any;
  onChange?: (value: FileList) => void;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export interface TextAreaProps extends HTMLField<HTMLTextAreaElement> {
  value?: string;
  onChange?: (value: string) => void;
}

export interface CheckboxProps extends HTMLField<HTMLInputElement> {
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export interface ToggleButtonProps extends HTMLField<HTMLButtonElement> {
  value?: boolean;
  onChange?: (value: boolean) => void;
  children?: React.ReactNode;
}

export interface CheckboxItemProps<Value> extends HTMLField<HTMLInputElement> {
  value?: Value[];
  onChange?: (value: Value[]) => void;
  represents: Value;
}

export interface RadioProps<Value> extends HTMLField<HTMLInputElement> {
  value?: Value;
  onChange?: (value: Value) => void;
  represents: Value;
}

export interface SelectProps extends HTMLField<HTMLSelectElement> {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  options?: Array<OptionProps | string>;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  children?: React.ReactNode;
}

interface ThemeClassNames {
  className?: string;
  fieldClassName?: string;
  labelClassName?: string;
  legendClassName?: string;
  helpClassName?: string;
  errorClassName?: string;
}

export interface ClassName<Props = {}> {
  [key: string]: boolean | ((props: Props) => any);
}

export type Theme<ThemeProps = {}, Props = {}> = {
  props?: Array<keyof ThemeProps | string>;
} & {
  [K in keyof Props & keyof ThemeClassNames]?:
    | string
    | ClassName<Props & ThemeProps>;
};

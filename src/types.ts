import * as React from "react";

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

export interface FieldConfig<Value> {
  value: Value;
  onChange(value: Value): void;
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
  fieldClassName?: string;
}

export interface Field<Value> {
  value: Value;
  onChange(value: Value): void;
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

export type HTMLField<Element, Value> = FieldConfig<Value> &
  Omit<React.HTMLProps<Element>, "value" | "onChange" | "label">;

export interface InputProps extends HTMLField<HTMLInputElement, string> {
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export interface TextAreaProps extends HTMLField<HTMLTextAreaElement, string> {}
export interface CheckboxProps extends HTMLField<HTMLInputElement, boolean> {}
export interface ToggleButtonProps
  extends HTMLField<HTMLButtonElement, boolean> {}

export interface CheckboxItemProps<Value>
  extends HTMLField<HTMLInputElement, Value[]> {
  represents: Value;
}

export interface RadioProps<Value> extends HTMLField<HTMLInputElement, Value> {
  represents: Value;
}

export interface SelectProps extends HTMLField<HTMLSelectElement, string> {
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

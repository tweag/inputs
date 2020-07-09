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
  ref?: React.Ref<any>;
  "aria-labelledby"?: string;
  [key: string]: any;
}

export interface FieldConfig {
  id?: any;
  innerRef?: React.Ref<any>;
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

export type HTMLField<Element> = FieldConfig &
  Omit<HTMLProps<Element>, "value" | "label">;

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

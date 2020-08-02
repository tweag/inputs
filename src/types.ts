import { FormField } from "@stackup/form";

export type FieldSize = "small" | "large";

export interface FieldProps<Value, Element> {
  /** See [@stackup/form](https://github.com/rzane/form) */
  field: FormField<Value>;

  /** Content to appear in the label */
  label: React.ReactNode;

  /** Extra help info that will be rendered within the label */
  help?: React.ReactNode;

  /** Content to render before the input */
  prepend?: React.ReactNode;

  /** Content to render after the input */
  append?: React.ReactNode;

  /** An additional class name for the field */
  className?: string;

  /** An additional class name for the input */
  inputClassName?: string;

  /** An additional class name for the label */
  labelClassName?: string;

  /** An additional class name for the help */
  helpClassName?: string;

  /** An additional class name for the error */
  errorClassName?: string;

  /** Appends a class name to all elements */
  size?: FieldSize;

  /** Appends a class name to all elements */
  inline?: boolean;

  /** Appends a class name to all elements */
  condensed?: boolean;

  /** A ref to the input element */
  innerRef?: React.Ref<Element>;
}

export type Attributes<Element extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[Element],
  | "key"
  | "ref"
  | "type"
  | "size"
  | "label"
  | "multiple"
  | "checked"
  | "defaultValue"
  | "value"
  | "defaultValue"
  | "onBlur"
  | "onChange"
  | "children"
>;

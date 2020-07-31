import { FormField } from "@stackup/form";

export type FieldSize = "small" | "large";

export interface FieldProps<Value, Element> {
  field: FormField<Value>;
  innerRef?: React.Ref<Element>;
  label: React.ReactNode;
  help?: React.ReactNode;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  helpClassName?: string;
  errorClassName?: string;
  size?: FieldSize;
  inline?: boolean;
  condensed?: boolean;
}

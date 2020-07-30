import { FormField } from "@stackup/form";

export type Size = "small" | "large";

export interface StyleProps {
  field: FormField<any>;
  size?: Size;
  variant?: string;
  check?: boolean;
  inline?: boolean;
  condensed?: boolean;
}

export interface SharedFieldProps {
  label: React.ReactNode;
  help?: React.ReactNode;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  helpClassName?: string;
  errorClassName?: string;
}

export interface FieldProps extends SharedFieldProps, StyleProps {
  field: FormField<any>;
  variant: string;
  children?: React.ReactNode;
}

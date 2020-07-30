import * as React from "react";
import { concat } from "./utilities";
import { Field as FormField } from "@stackup/form";

type Attributes = React.HTMLAttributes<HTMLDivElement>;

export interface StyleProps {
  check?: boolean;
  inline?: boolean;
  condensed?: boolean;
  size?: "small" | "large";
}

export interface FieldProps extends StyleProps, Attributes {
  field: FormField<any>;
  children?: React.ReactNode;
}

function isPopulated(value: any) {
  return typeof value !== "undefined" && value !== null && value !== "";
}

export function Field(props: FieldProps) {
  const {
    field,
    className,
    children,
    onBlur,
    size,
    check,
    inline,
    condensed,
    ...fieldProps
  } = props;

  const fieldClassName = concat(
    "field",
    size && `field--${size}`,
    check && "field--check",
    inline && "field--inline",
    condensed && "field--condensed",
    field.touched && "field--touched",
    isPopulated(field.value) && "field--populated",
    className
  );

  return (
    <div {...fieldProps} className={fieldClassName}>
      {children}
    </div>
  );
}

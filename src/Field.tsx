import * as React from "react";
import { FormField } from "@stackup/form";
import { StyleProps, getClassName, getError, getRelatedId } from "./utilities";

export interface FieldProps {
  label: React.ReactNode;
  help?: React.ReactNode;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  helpClassName?: string;
  errorClassName?: string;
}

export interface AnyFieldProps extends FieldProps, StyleProps {
  field: FormField<any>;
  variant: string;
  children?: React.ReactNode;
}

export function Field(props: AnyFieldProps) {
  const { field, label, help, append, prepend, check, children } = props;

  const error = getError(field);
  const errorId = getRelatedId(field, "error");
  const labelId = getRelatedId(field, "label");

  const className = getClassName(props, "field", props.className);
  const helpClassName = getClassName(props, "field__help", props.helpClassName);
  const labelClassName = getClassName(
    props,
    "field__label",
    props.labelClassName
  );
  const errorClassName = getClassName(
    props,
    "field__error",
    props.errorClassName
  );

  const renderLabel = () => (
    <label id={labelId} htmlFor={field.id} className={labelClassName}>
      {label}
      {help && <span className={helpClassName}>{help}</span>}
    </label>
  );

  return (
    <div className={className}>
      {!check && renderLabel()}
      {prepend}
      {children}
      {append}
      {check && renderLabel()}
      {error && (
        <span id={errorId} role="alert" className={errorClassName}>
          {error}
        </span>
      )}
    </div>
  );
}

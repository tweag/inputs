import * as React from "react";
import { Field as FormField } from "@stackup/form";
import { StyleProps, getClassName, getError, getRelatedId } from "./utilities";

export interface FieldProps extends StyleProps {
  field: FormField<any>;
  label: React.ReactNode;
  help?: React.ReactNode;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  children?: React.ReactNode;
}

export function Field(props: FieldProps) {
  const { field, label, help, append, prepend, check, children } = props;

  const error = getError(field);
  const errorId = getRelatedId(field, "error");
  const labelId = getRelatedId(field, "label");

  const className = getClassName(props, "field");
  const labelClassName = getClassName(props, "field__label");
  const errorClassName = getClassName(props, "field__error");
  const helpClassName = getClassName(props, "field__help");

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
      {check && renderLabel()}
      {append}
      {error && (
        <span id={errorId} role="alert" className={errorClassName}>
          {error}
        </span>
      )}
    </div>
  );
}

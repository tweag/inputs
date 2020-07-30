import * as React from "react";
import { getClassName, getError, getRelatedId } from "./utilities";
import { FieldProps } from "./types";

export function Field(props: FieldProps) {
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

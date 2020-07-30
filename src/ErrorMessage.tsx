import * as React from "react";
import {
  getClassName,
  useFieldContext,
  getRelatedId,
  getError
} from "./FieldContext";

type Attributes = React.HTMLAttributes<HTMLSpanElement>;

export interface ErrorMessageProps extends Attributes {
  children?: React.ReactNode;
}

export function ErrorMessage({ children, ...props }: ErrorMessageProps) {
  const context = useFieldContext();
  const error = getError(context.field);
  const id = getRelatedId(context.field, "error");
  const className = getClassName(context, "field__error", props.className);

  if (!error) {
    return null;
  }

  return (
    <span role="alert" {...props} id={id} className={className}>
      {error}
    </span>
  );
}

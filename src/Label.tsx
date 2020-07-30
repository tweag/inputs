import * as React from "react";
import { getClassName, useFieldContext, getRelatedId } from "./FieldContext";

type Attributes = React.LabelHTMLAttributes<HTMLLabelElement>;

export interface LabelProps extends Attributes {
  children?: React.ReactNode;
}

export function Label(props: LabelProps) {
  const { children, ...labelProps } = props;

  const context = useFieldContext();
  const id = getRelatedId(context, "label");
  const className = getClassName(context, "field--label", labelProps.className);

  return (
    <label
      {...labelProps}
      id={id}
      className={className}
      htmlFor={context.field.id}
    >
      {children}
    </label>
  );
}

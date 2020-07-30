import * as React from "react";
import { getClassName, useFieldContext } from "./FieldContext";

type Attributes = React.HTMLAttributes<HTMLSpanElement>;

export interface HelpProps extends Attributes {
  children?: React.ReactNode;
}

export function Help(props: HelpProps) {
  const { children, ...helpProps } = props;

  const context = useFieldContext();
  const className = getClassName(context, "field__help", helpProps.className);

  return (
    <span {...helpProps} className={className}>
      {children}
    </span>
  );
}

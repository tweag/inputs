import * as React from "react";
import { Field as FormField } from "@stackup/form";
import {
  StyleProps,
  FieldContextValue,
  getClassName,
  FieldContext
} from "./FieldContext";

type Attributes = React.HTMLAttributes<HTMLDivElement>;

export interface FieldProps extends StyleProps, Attributes {
  field: FormField<any>;
  children?: React.ReactNode;
}

export function Field(props: FieldProps) {
  const {
    field,
    size,
    check,
    inline,
    condensed,
    children,
    ...fieldProps
  } = props;

  const context: FieldContextValue = {
    field,
    style: { size, check, inline, condensed }
  };

  const className = getClassName(context, "field", fieldProps.className);

  return (
    <FieldContext.Provider value={context}>
      <div {...fieldProps} className={className}>
        {children}
      </div>
    </FieldContext.Provider>
  );
}

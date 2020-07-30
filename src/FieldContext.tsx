import { createContext, useContext } from "react";
import { Field as FormField } from "@stackup/form";
import { concat, isUndefined, isString } from "./utilities";

export interface StyleProps {
  check?: boolean;
  inline?: boolean;
  condensed?: boolean;
  size?: "small" | "large";
}

export interface FieldContextValue {
  field: FormField<any>;
  style: StyleProps;
}

export const FieldContext = createContext<FieldContextValue | undefined>(
  undefined
);

FieldContext.displayName = "Field";

export function useFieldContext(): FieldContextValue {
  const value = useContext(FieldContext);

  if (!value) {
    throw new Error("Must be rendered within a <Field />");
  }

  return value;
}

function isPopulated(value: any) {
  return !isUndefined(value) && value !== null && value !== "";
}

export function getClassName(
  ctx: FieldContextValue,
  prefix: string,
  ...otherClassNames: any[]
) {
  return concat(
    prefix,
    ctx.style.check && `${prefix}--check`,
    ctx.style.inline && `${prefix}--inline`,
    ctx.style.condensed && `${prefix}--condensed`,
    ctx.style.size && `${prefix}--${ctx.style.size}`,
    ctx.field.touched && `${prefix}--touched`,
    isPopulated(ctx.field.value) && `${prefix}--populated`,
    ...otherClassNames
  );
}

export function getRelatedId(field: FormField<any>, suffix: string): string {
  return `${field.id}--${suffix}`;
}

export function getError(field: FormField<any>): string | undefined {
  return field.touched && isString(field.error) ? field.error : undefined;
}

export function getLabelledBy(field: FormField<any>): string | undefined {
  const error = getError(field);
  const errorId = getRelatedId(field, "error");
  const labelId = getRelatedId(field, "label");
  return concat(labelId, error && errorId);
}

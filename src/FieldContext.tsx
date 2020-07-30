import { createContext, useContext } from "react";
import { Field as FormField } from "@stackup/form";
import { concat } from "./utilities";

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
  return typeof value !== "undefined" && value !== null && value !== "";
}

export function getClassName(
  ctx: FieldContextValue,
  prefix: string,
  ...otherClassNames: any[]
) {
  return concat(
    prefix,
    ctx.style.check && "field--check",
    ctx.style.inline && "field--inline",
    ctx.style.condensed && "field--condensed",
    ctx.style.size && `field--${ctx.style.size}`,
    ctx.field.touched && "field--touched",
    isPopulated(ctx.field.value) && "field--populated",
    ...otherClassNames
  );
}

export function getRelatedId(ctx: FieldContextValue, suffix: string): string {
  return `${ctx.field.id}--${suffix}`;
}

export function getError(ctx: FieldContextValue): string | undefined {
  return ctx.field.touched && typeof ctx.field.error === "string"
    ? ctx.field.error
    : undefined;
}

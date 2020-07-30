import * as React from "react";
import { Field as FormField } from "@stackup/form";

export type Size = "small" | "large";

export interface StyleProps {
  field: FormField<any>;
  size?: Size;
  variant?: string;
  check?: boolean;
  inline?: boolean;
  condensed?: boolean;
}

export function isUndefined(value: any): value is undefined {
  return typeof value === "undefined";
}

export function isString(value: any): value is string {
  return typeof value === "string";
}

export function isNumber(value: any): value is number {
  return typeof value === "number";
}

export function isPopulated(value: any) {
  return !isUndefined(value) && value !== null && value !== "";
}

export function getDOMValue(value: any): string | number | undefined {
  return isString(value) || isNumber(value) ? value : undefined;
}

export function useBlur({ setTouched }: FormField<any>) {
  return React.useCallback(() => setTouched(true), [setTouched]);
}

export function concat(...names: any[]): string | undefined {
  let out = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i]) out += ` ${names[i]}`;
  }
  return out.trim() || undefined;
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

export function getClassName(
  style: StyleProps,
  prefix: string,
  ...otherClassNames: any[]
) {
  return concat(
    prefix,
    style.check && `${prefix}--check`,
    style.inline && `${prefix}--inline`,
    style.condensed && `${prefix}--condensed`,
    style.size && `${prefix}--${style.size}`,
    style.variant && `${prefix}--${style.variant}`,
    style.field.touched && `${prefix}--touched`,
    isPopulated(style.field.value) && `${prefix}--populated`,
    ...otherClassNames
  );
}

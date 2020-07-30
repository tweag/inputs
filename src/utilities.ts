import * as React from "react";
import equals from "fast-deep-equal";
import { FormField, useIdentifier } from "@stackup/form";

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

export function getDOMValue(value: any): string | number | undefined {
  return isString(value) || isNumber(value) ? value : undefined;
}

export function remove<T>(values: T[], value: T): T[] {
  return values.filter(v => !equals(v, value));
}

export function contains<T>(values: T[], value: T): boolean {
  for (const v of values) {
    if (equals(v, value)) return true;
  }
  return false;
}

/**
 * In the case of radios and checkboxes, we needed to distinguish each item from
 * other items. Howerver, many utilities rely on the field's ID property.
 *
 * To make sure that these items have unique IDs, we'll merge the new ID into the
 * field.
 */
export function useNestedId<T extends FormField<any>>(field: T): T {
  const suffix = useIdentifier();

  return React.useMemo(
    () => ({
      ...field,
      id: `${field.id}--${suffix}`
    }),
    [field, suffix]
  );
}

import * as React from "react";
import equals from "fast-deep-equal";
import { FormField, useIdentifier } from "@stackup/form";

export function isString(value: any): value is string {
  return typeof value === "string";
}

export function isNumber(value: any): value is number {
  return typeof value === "number";
}

export function concat(...names: any[]): string | undefined {
  let out = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i]) out += ` ${names[i]}`;
  }
  return out.trim() || undefined;
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
      id: `${field.id}_${suffix}`
    }),
    [field, suffix]
  );
}

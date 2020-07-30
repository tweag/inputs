import * as React from "react";
import isEqual from "fast-deep-equal";
import { Field } from "@stackup/form";

export function isUndefined(value: any): value is undefined {
  return typeof value === "undefined";
}

export function isString(value: any): value is string {
  return typeof value === "string";
}

export function isNumber(value: any): value is number {
  return typeof value === "number";
}

/**
 * Check if an array contains a value using deep equality.
 */
export function contains<T>(values: T[], value: T): boolean {
  for (let i = 0; i < values.length; i++) {
    if (isEqual(values[i], value)) {
      return true;
    }
  }
  return false;
}

/**
 * Remove a value from an array using deep equality.
 */
export function remove<T>(values: T[], value: T): T[] {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (!isEqual(values[i], value)) {
      result.push(values[i]);
    }
  }
  return result;
}

/**
 * Toggle an element's inclusion in an array
 */
export function toggle<T>(values: T[], value: T): T[] {
  return contains(values, value) ? remove(values, value) : [...values, value];
}

/**
 * Return the value if it can be rendered in the DOM
 */
export function getDOMValue(value: any): string | number | undefined {
  if (isString(value) || isNumber(value)) {
    return value;
  } else {
    return undefined;
  }
}

/**
 * Create a handler for `onBlur`
 */
export function useBlur({ setTouched }: Field<any>) {
  return React.useCallback(() => setTouched(true), [setTouched]);
}

/**
 * Join multiple class names together
 */
export function concat(...names: any[]): string | undefined {
  let out = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i]) out += ` ${names[i]}`;
  }
  return out.trim() || undefined;
}

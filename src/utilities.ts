import * as React from "react";
import isEqual from "fast-deep-equal";

/**
 * Extract props from an HTMLElement, but remove conflicts.
 */
export interface HTMLProps<T>
  extends Omit<React.HTMLProps<T>, "value" | "label"> {
  "data-testid"?: string;
}

/**
 * Check if the value is undefined.
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === "undefined";
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
 * Join multiple class names together
 */
export function concat(...names: any[]): string | undefined {
  let out = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i]) out += ` ${names[i]}`;
  }
  return out.trim() || undefined;
}

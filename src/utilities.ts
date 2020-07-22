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
 * Toggle an element's inclusion in an array
 */
export function toggle<T>(values: T[], value: T): T[] {
  return contains(values, value) ? remove(values, value) : [...values, value];
}

/**
 * Return the value if it can be rendered in the DOM
 */
export function getDOMValue(value: any): string | number | undefined {
  if (typeof value === "string" || typeof value === "number") {
    return value;
  } else {
    return undefined;
  }
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

/**
 * Create a new Group context
 */

export interface GroupContext {
  name?: string;
  value?: any;
  children?: React.ReactNode;
  onChangeValue?: (value: any) => void;
}

export function createGroupContext(name: string) {
  const context = React.createContext<GroupContext | undefined>(undefined);
  context.displayName = name;

  function useGroup(): GroupContext {
    const group = React.useContext(context);

    if (!group) {
      throw new Error(`<${name}.Item /> must be rendered within a <${name} />`);
    }

    return group;
  }

  return { Provider: context.Provider, useGroup };
}

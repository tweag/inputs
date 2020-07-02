import isEqual from "fast-deep-equal";

/**
 * Check if a value is undefined
 */
export const isUndefined = (value: any): value is undefined => {
  return typeof value === "undefined";
};

/**
 * Check if a value is undefined, null, or an empty string
 */
export const isPopulated = (value: any): boolean => {
  return !isUndefined(value) && value !== null && value !== "";
};

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
      result.push(value);
    }
  }
  return result;
}

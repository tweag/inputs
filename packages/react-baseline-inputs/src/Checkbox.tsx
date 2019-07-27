import * as React from "react";
import { CustomInputProps } from "./types";

export type CheckboxProps = CustomInputProps<"input", boolean | null>;

/**
 * An HTML checkbox input, but with the following benefits:
 *
 *   * It accepts boolean values.
 *   * It treats `null` values as unchecked.
 *   * It always emits a boolean value when changed.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  value,
  ...props
}) => {
  const handleChange = React.useCallback(() => onChange(!value), [
    value,
    onChange
  ]);

  return (
    <input
      {...props}
      type="checkbox"
      checked={Boolean(value)}
      onChange={handleChange}
    />
  );
};

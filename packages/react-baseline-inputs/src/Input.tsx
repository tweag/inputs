import * as React from "react";
import { CustomInputProps } from "./types";

export type InputProps = CustomInputProps<"input", string | null>;

/**
 * An HTML checkbox input, but with the following benefits:
 *
 *   * It accepts boolean values.
 *   * It treats `null` values as unchecked.
 *   * It always emits a boolean value when changed.
 */
export const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <input
      type="text"
      value={value === null ? "" : value}
      onChange={handleChange}
      {...props}
    />
  );
};

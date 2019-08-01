import * as React from "react";
import { CustomInputProps } from "./types";

export type CheckboxProps = CustomInputProps<"input", boolean | null>;

/**
 * An HTML `<input />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  value,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.checked),
    [onChange]
  );

  return (
    <input
      {...props}
      type="checkbox"
      checked={Boolean(value)}
      onChange={handleChange}
    />
  );
};

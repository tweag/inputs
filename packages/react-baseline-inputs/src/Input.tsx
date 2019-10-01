import * as React from "react";
import { CustomInputProps } from "./types";

export type InputProps = CustomInputProps<"input", string | null>;

/**
 * An HTML `<input />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It defaults to `type="text"`.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <input type="text" value={value || ""} onChange={handleChange} {...props} />
  );
};

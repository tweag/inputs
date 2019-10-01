import * as React from "react";
import { CustomInputProps } from "./types";

export type TextAreaProps = CustomInputProps<"textarea", string | null>;

/**
 * An HTML `<textarea />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return <textarea value={value || ""} onChange={handleChange} {...props} />;
};

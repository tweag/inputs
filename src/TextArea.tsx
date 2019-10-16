import * as React from "react";
import { CustomInputProps } from "./types";
import { Field } from "./Field";

export type TextAreaProps = CustomInputProps<"textarea", string | null>;

/**
 * An HTML `<textarea />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const TextArea: React.FC<TextAreaProps> = ({
  value,
  label,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <Field
      label={label}
      render={inputProps => (
        <textarea {...inputProps} value={value || ""} onChange={handleChange} />
      )}
      {...props}
    />
  );
};

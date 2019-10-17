import * as React from "react";
import { Field } from "./Field";
import { TextAreaProps } from "./types";

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

  return (
    <Field
      render={inputProps => (
        <textarea {...inputProps} value={value || ""} onChange={handleChange} />
      )}
      {...props}
    />
  );
};

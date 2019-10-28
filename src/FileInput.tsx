import * as React from "react";
import { Field } from "./Field";
import { FileInputProps } from "./types";

/**
 * An HTML `<input type="file" />`, but with the following benefits:
 *
 *   * It emits a `File | null` when changed.
 *   * It ignores any `value` prop that you give it.
 */
export const FileInput: React.FC<FileInputProps> = ({
  onChange,
  value: _value,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.files[0] || null),
    [onChange]
  );

  return (
    <Field
      render={inputProps => (
        <input type="file" onChange={handleChange} {...inputProps} />
      )}
      {...props}
    />
  );
};

import * as React from "react";
import { Field } from "./Field";
import { FileListInputProps } from "./types";

/**
 * An HTML `<input type="file" />`, but with the following benefits:
 *
 *   * It emits a `FileList` when changed.
 *   * It ignores any `value` prop that you give it.
 */
export const FileListInput: React.FC<FileListInputProps> = ({
  onChange,
  value: _value,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.files),
    [onChange]
  );

  return (
    <Field
      render={inputProps => (
        <input type="file" onChange={handleChange} multiple {...inputProps} />
      )}
      {...props}
    />
  );
};

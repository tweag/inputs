import * as React from "react";
import { Field } from "./Field";
import { FileListInputProps } from "./types";
import { useTheme } from "./config";

/**
 * An HTML `<input type="file" />`, but with the following benefits:
 *
 *   * It emits a `FileList` when changed.
 *   * It ignores any `value` prop that you give it.
 */
export const FileListInput: React.FC<FileListInputProps> = ({
  onChange,
  value: _value,
  theme = useTheme("fileInput"),
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.files),
    [onChange]
  );

  return (
    <Field
      theme={theme}
      render={inputProps => (
        <input type="file" onChange={handleChange} multiple {...inputProps} />
      )}
      {...props}
    />
  );
};

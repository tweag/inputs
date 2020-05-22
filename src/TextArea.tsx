import * as React from "react";
import { Field } from "./Field";
import { TextAreaProps } from "./types";
import { useTheme } from "./theme";

/**
 * An HTML `<textarea />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  theme: _theme,
  ...props
}) => {
  const theme = useTheme("textarea", _theme);

  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <Field
      theme={theme}
      render={inputProps => (
        <textarea value={value || ""} onChange={handleChange} {...inputProps} />
      )}
      {...props}
    />
  );
};

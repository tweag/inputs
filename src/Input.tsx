import * as React from "react";
import { Field } from "./Field";
import { InputProps } from "./types";
import { useTheme } from "./theme";

/**
 * An HTML `<input />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It defaults to `type="text"`.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  theme: _theme,
  ...props
}) => {
  const theme = useTheme("input", _theme);

  const handleChange = React.useCallback(
    (event) => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <Field
      theme={theme}
      render={(inputProps) => (
        <input
          type="text"
          value={value || ""}
          onChange={handleChange}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};

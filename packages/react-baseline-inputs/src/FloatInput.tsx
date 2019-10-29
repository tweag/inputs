import * as React from "react";
import { Field } from "./Field";
import { FloatInputProps } from "./types";
import { useTheme } from "./theme";

/**
 * An HTML `<input type="number" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It always emits a number when changed.
 */
export const FloatInput: React.FC<FloatInputProps> = ({
  value,
  onChange,
  theme = useTheme("floatInput"),
  ...props
}) => {
  const handleChange = React.useCallback(
    event => {
      const value = parseFloat(event.target.value);
      isNaN(value) ? onChange(null) : onChange(value);
    },
    [onChange]
  );

  return (
    <Field
      theme={theme}
      render={inputProps => (
        <input
          type="number"
          onChange={handleChange}
          value={value === null ? "" : value}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};

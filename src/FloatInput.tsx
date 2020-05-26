import * as React from "react";
import { Field } from "./Field";
import { FloatInputProps } from "./types";
import { useTheme } from "./theme";
import { floatFormat } from "./formats";

/**
 * An HTML `<input type="number" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It always emits a number when changed.
 */
export const FloatInput: React.FC<FloatInputProps> = ({
  value,
  onChange,
  theme: _theme,
  ...props
}) => {
  const theme = useTheme("floatInput", _theme);

  const handleChange = React.useCallback(
    event => onChange(floatFormat.parse(event.target.value)),
    [onChange]
  );

  const formattedValue = React.useMemo(
    () => (typeof value === "number" ? floatFormat.format(value) : ""),
    [value]
  );

  return (
    <Field
      theme={theme}
      render={inputProps => (
        <input
          type="number"
          onChange={handleChange}
          value={formattedValue}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};

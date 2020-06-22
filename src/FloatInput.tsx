import * as React from "react";
import { Field } from "./Field";
import { FloatInputProps } from "./types";
import { useTheme } from "./theme";
import { floatFormat } from "./formats";
import { isPopulated } from "./utils";

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

  return (
    <Field
      theme={theme}
      populated={isPopulated(value)}
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

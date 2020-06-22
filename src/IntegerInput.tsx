import * as React from "react";
import { Field } from "./Field";
import { IntegerInputProps } from "./types";
import { useTheme } from "./theme";
import { integerFormat } from "./formats";
import { isPopulated } from "./utils";

/**
 * An HTML `<input type="number" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It always emits an integer when changed.
 */
export const IntegerInput: React.FC<IntegerInputProps> = ({
  value,
  onChange,
  theme: _theme,
  ...props
}) => {
  const theme = useTheme("integerInput", _theme);

  const handleChange = React.useCallback(
    event => onChange(integerFormat.parse(event.target.value)),
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

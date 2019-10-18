import * as React from "react";
import { Field } from "./Field";
import { IntegerInputProps } from "./types";

/**
 * An HTML `<input type="number" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It always emits an integer when changed.
 */
export const IntegerInput: React.FC<IntegerInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => {
      const value = parseInt(event.target.value, 10);
      isNaN(value) ? onChange(null) : onChange(value);
    },
    [onChange]
  );

  return (
    <Field
      render={inputProps => (
        <input
          {...inputProps}
          type="number"
          onChange={handleChange}
          value={value === null ? "" : value}
        />
      )}
      {...props}
    />
  );
};

import * as React from "react";
import { CustomInputProps } from "./types";
import { Field } from "./Field";

export type IntegerInputProps = CustomInputProps<"input", number | null>;

/**
 * An HTML `<input type="number" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It always emits an integer when changed.
 */
export const IntegerInput: React.FC<IntegerInputProps> = ({
  value,
  onChange,
  label = false,
  wrap = true,
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
      label={label}
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

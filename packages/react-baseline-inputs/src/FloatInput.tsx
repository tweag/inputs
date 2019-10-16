import * as React from "react";
import { CustomInputProps } from "./types";
import { Field } from "./Field";

export type FloatInputProps = CustomInputProps<"input", number | null>;

/**
 * An HTML `<input type="number" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It always emits a number when changed.
 */
export const FloatInput: React.FC<FloatInputProps> = ({
  value,
  onChange,
  label = false,
  wrap = true,
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

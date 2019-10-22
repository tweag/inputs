import * as React from "react";
import { Field } from "./Field";
import { RadioProps } from "./types";

/**
 * An HTML `<input type="radio" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It defaults to `type="text"`.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const Radio: React.FC<RadioProps> = ({ value, onChange, ...props }) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <Field
      inline
      render={inputProps => (
        <input
          {...inputProps}
          type="radio"
          value={value || ""}
          onChange={handleChange}
        />
      )}
      {...props}
    />
  );
};

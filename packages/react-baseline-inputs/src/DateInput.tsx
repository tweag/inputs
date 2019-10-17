import * as React from "react";
import { Field } from "./Field";
import { DateInputProps } from "./types";

/**
 * An HTML `<input type="date" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits an ISO-formatted date string when changed.
 */
export const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => {
      const { value } = event.target;
      const date = new Date(value);
      const isValid = !isNaN(date.valueOf());
      onChange(isValid ? value : null);
    },
    [onChange]
  );

  return (
    <Field
      render={inputProps => (
        <input
          {...inputProps}
          type="date"
          value={value || ""}
          onChange={handleChange}
        />
      )}
      {...props}
    />
  );
};

import * as React from "react";
import { Field } from "./Field";
import { DateInputProps } from "./types";

const parse = (value: string): string | null => {
  const date = new Date(value);
  const isValid = !isNaN(date.getTime());
  return isValid ? value : null;
};

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
    event => onChange(parse(event.target.value)),
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

import * as React from "react";
import format from "date-fns/format";
import parse from "date-fns/parse";
import isValid from "date-fns/is_valid";
import { Field } from "./Field";
import { DateTimeInputProps } from "./types";

/**
 * An HTML `<input type="datetime-local" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits an ISO-formatted datetime string when changed.
 */
export const DateTimeInput: React.FC<DateTimeInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const formattedValue = React.useMemo(
    () => (value ? format(value, "YYYY-MM-DDTHH:mm:ss") : ""),
    [value]
  );

  const handleChange = React.useCallback(
    event => {
      const value = parse(event.target.value);

      if (isValid(value)) {
        onChange(value.toISOString());
      } else {
        onChange(null);
      }
    },
    [onChange]
  );

  return (
    <Field
      render={inputProps => (
        <input
          {...inputProps}
          type="datetime-local"
          value={formattedValue}
          onChange={handleChange}
        />
      )}
      {...props}
    />
  );
};

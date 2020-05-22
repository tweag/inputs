import * as React from "react";
import { Field } from "./Field";
import { DateTimeInputProps } from "./types";
import { useTheme } from "./theme";

const format = (value: string | null): string => {
  return value ? value.substring(0, 16) : "";
};

const parse = (value: string): string | null => {
  const date = new Date(`${value}:00.000Z`);
  const isValid = !isNaN(date.getTime());
  return isValid ? date.toISOString() : null;
};

/**
 * An HTML `<input type="datetime-local" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits an ISO-formatted datetime string when changed.
 */
export const DateTimeInput: React.FC<DateTimeInputProps> = ({
  value,
  onChange,
  theme: _theme,
  ...props
}) => {
  const theme = useTheme("dateTimeInput", _theme);

  const handleChange = React.useCallback(
    (event) => onChange(parse(event.target.value)),
    [onChange]
  );

  return (
    <Field
      theme={theme}
      render={(inputProps) => (
        <input
          type="datetime-local"
          value={format(value)}
          onChange={handleChange}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};

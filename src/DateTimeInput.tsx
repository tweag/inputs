import * as React from "react";
import { Field } from "./Field";
import { DateTimeInputProps } from "./types";
import { useTheme } from "./theme";
import { dateTimeFormat } from "./formats";

/**
 * An HTML `<input type="datetime-local" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits an ISO-formatted datetime string when changed.
 *   * The time is converted to UTC.
 */
export const DateTimeInput: React.FC<DateTimeInputProps> = ({
  value,
  onChange,
  theme: _theme,
  ...props
}) => {
  const theme = useTheme("dateTimeInput", _theme);

  const handleChange = React.useCallback(
    event => onChange(dateTimeFormat.parse(event.target.value)),
    [onChange]
  );

  const formattedValue = React.useMemo(
    () => (value ? dateTimeFormat.format(value) : ""),
    [value]
  );

  return (
    <Field
      theme={theme}
      render={inputProps => (
        <input
          type="datetime-local"
          value={formattedValue}
          onChange={handleChange}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};

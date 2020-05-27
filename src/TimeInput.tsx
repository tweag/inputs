import * as React from "react";
import { Field } from "./Field";
import { TimeInputProps } from "./types";
import { useTheme } from "./theme";
import { timeFormat } from "./formats";

/**
 * An HTML `<input type="time" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits an ISO-formatted time string when changed.
 *   * The time is converted to UTC.
 *   * The time must be formatted as `00:00Z`
 */
export const TimeInput: React.FC<TimeInputProps> = ({
  value,
  onChange,
  theme: _theme,
  ...props
}) => {
  const theme = useTheme("timeInput", _theme);

  const handleChange = React.useCallback(
    event => onChange(timeFormat.parse(event.target.value)),
    [onChange]
  );

  const formattedValue = React.useMemo(
    () => (value ? timeFormat.format(value) : ""),
    [value]
  );

  return (
    <Field
      theme={theme}
      render={inputProps => (
        <input
          type="time"
          value={formattedValue}
          onChange={handleChange}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};

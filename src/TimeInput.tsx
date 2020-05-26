import * as React from "react";
import { Field } from "./Field";
import { TimeInputProps } from "./types";
import { useTheme } from "./theme";

const pad = (value: number): string => {
  return (value < 10 ? "0" : "") + value;
};

const format = (value: string): string => {
  const [hours, minutes] = value.split(":").map(Number);

  const date = new Date();
  date.setUTCHours(hours);
  date.setUTCMinutes(minutes);

  const localHours = pad(date.getHours());
  const localMinutes = pad(date.getMinutes());
  return `${localHours}:${localMinutes}`;
};

const parse = (value: string): string => {
  const [hours, minutes] = value.split(":").map(Number);

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  const utcHours = pad(date.getUTCHours());
  const utcMinutes = pad(date.getUTCMinutes());
  return `${utcHours}:${utcMinutes}:00`;
};

/**
 * An HTML `<input type="time" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits an ISO-formatted time string when changed.
 *   * The time is converted to UTC.
 */
export const TimeInput: React.FC<TimeInputProps> = ({
  value,
  onChange,
  theme: _theme,
  ...props
}) => {
  const theme = useTheme("timeInput", _theme);

  const handleChange = React.useCallback(
    event => onChange(parse(event.target.value)),
    [onChange]
  );

  return (
    <Field
      theme={theme}
      render={inputProps => (
        <input
          type="time"
          value={value ? format(value) : ""}
          onChange={handleChange}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};

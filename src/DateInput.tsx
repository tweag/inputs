import * as React from "react";
import { Field } from "./Field";
import { DateInputProps } from "./types";
import { useTheme } from "./theme";

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
  theme = useTheme("dateInput"),
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(parse(event.target.value)),
    [onChange]
  );

  return (
    <Field
      theme={theme}
      render={inputProps => (
        <input
          type="date"
          value={value || ""}
          onChange={handleChange}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};

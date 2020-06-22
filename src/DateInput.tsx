import * as React from "react";
import { Field } from "./Field";
import { DateInputProps } from "./types";
import { useTheme } from "./theme";
import { dateFormat } from "./formats";
import { isPopulated } from "./utils";

/**
 * An HTML `<input type="date" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits an ISO-formatted date string when changed.
 */
export const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  theme: _theme,
  ...props
}) => {
  const theme = useTheme("dateInput", _theme);

  const handleChange = React.useCallback(
    event => onChange(dateFormat.parse(event.target.value)),
    [onChange]
  );

  return (
    <Field
      theme={theme}
      populated={isPopulated(value)}
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

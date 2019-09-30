import * as React from "react";
import { CustomInputProps } from "./types";

export type DateInputProps = CustomInputProps<"input", string | null>;

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
    <input {...props} type="date" value={value || ""} onChange={handleChange} />
  );
};

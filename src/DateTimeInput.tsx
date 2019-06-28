import React, { useCallback, useMemo } from "react";
import { CustomInputProps } from "./types";
import format from "date-fns/format";
import parse from "date-fns/parse";
import isValid from "date-fns/is_valid";

export type DateTimeInputProps = CustomInputProps<HTMLInputElement, string | null>;

export const DateTimeInput = ({
  value,
  onChange,
  ...props
}: DateTimeInputProps) => {
  const formattedValue = useMemo(
    () => (value ? format(value, "YYYY-MM-DDTHH:mm:ss") : ""),
    [value]
  );

  const handleChange = useCallback(
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
    <input
      {...props}
      type="datetime-local"
      value={formattedValue}
      onChange={handleChange}
    />
  );
};

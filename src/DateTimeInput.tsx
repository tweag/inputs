import React, { useCallback, useMemo } from "react";
import { CustomInputProps } from "./types";
import format from "date-fns/format";
import parse from "date-fns/parse";

export type DateTimeInputProps = CustomInputProps<HTMLInputElement, string>;

export const DateTimeInput = ({
  value,
  onChange,
  ...props
}: DateTimeInputProps) => {
  const formattedValue = useMemo(
    () => (value ? format(value, "YYYY-MM-DDTHH:mm:ss") : value),
    [value]
  );

  const handleChange = useCallback(
    event => onChange(parse(event.target.value).toISOString()),
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

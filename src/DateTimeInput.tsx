import React, { useCallback, useMemo } from "react";
import format from "date-fns/format";
import parse from "date-fns/parse";

export type DateTimeInputProps = React.HTMLProps<HTMLInputElement> & {
  value: string;
  onChange: (value: string) => void;
};

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

import React from "react";
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
}: DateTimeInputProps) => (
  <input
    {...props}
    type="datetime-local"
    value={value ? format(value, "YYYY-MM-DDTHH:mm:ss") : value}
    onChange={e => onChange(parse(e.target.value).toISOString())}
  />
);

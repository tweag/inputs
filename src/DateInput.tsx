import * as React from "react";
import { CustomInputProps } from "./types";
import format from "date-fns/format";
import parse from "date-fns/parse";
import isValid from "date-fns/is_valid";
import { asFormik } from "./asFormik";

export type DateInputProps = CustomInputProps<
  HTMLInputElement,
  string | null
>;

export const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const formattedValue = React.useMemo(
    () => (value ? format(value, "YYYY-MM-DD") : ""),
    [value]
  );

  const handleChange = React.useCallback(
    event => {
      const value = parse(event.target.value);

      if (isValid(value)) {
        onChange(format(value, "YYYY-MM-DD"));
      } else {
        onChange(null);
      }
    },
    [onChange]
  );

  return (
    <input
      {...props}
      type="date"
      value={formattedValue}
      onChange={handleChange}
    />
  );
};

export const FormikDateInput = asFormik(DateInput);

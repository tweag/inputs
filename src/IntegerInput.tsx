import * as React from "react";
import { CustomInputProps } from "./types";

export type IntegerInputProps = CustomInputProps<"input", number | null>;

export const IntegerInput: React.FC<IntegerInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => {
      const value = parseInt(event.target.value, 10);
      isNaN(value) ? onChange(null) : onChange(value);
    },
    [onChange]
  );

  return (
    <input
      {...props}
      type="number"
      onChange={handleChange}
      value={value === null ? "" : value}
    />
  );
};

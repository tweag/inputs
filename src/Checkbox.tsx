import React from "react";
import { CustomInputProps } from "./types";

export type CheckboxProps = CustomInputProps<"input", boolean | null>;

export const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  value,
  ...props
}) => {
  const handleChange = React.useCallback(() => onChange(!value), [
    value,
    onChange
  ]);

  return (
    <input
      {...props}
      type="checkbox"
      checked={Boolean(value)}
      onChange={handleChange}
    />
  );
};

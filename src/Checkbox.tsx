import React from "react";

export type CheckboxProps = React.HTMLProps<HTMLInputElement> & {
  value: boolean;
  onChange: (value: boolean) => void;
};

export const Checkbox = ({ onChange, value, ...props }: CheckboxProps) => (
  <input
    {...props}
    type="checkbox"
    value={value}
    onChange={() => onChange(!value)}
  />
);

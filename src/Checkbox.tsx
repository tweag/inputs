import React, { useCallback } from "react";

export type CheckboxProps = React.HTMLProps<HTMLInputElement> & {
  value: boolean;
  onChange: (value: boolean) => void;
};

export const Checkbox = ({ onChange, value, ...props }: CheckboxProps) => {
  const handleChange = useCallback(() => onChange(!value), [value, onChange]);

  return (
    <input {...props} type="checkbox" checked={value} onChange={handleChange} />
  );
};

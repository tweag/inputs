import React, { useCallback } from "react";

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  value: any;
  onChange: (value: any) => void;
};

export const Input = ({ onChange, ...props }: InputProps) => {
  const handleChange = useCallback(event => onChange(event.target.value), [
    onChange
  ]);

  return <input {...props} onChange={handleChange} />;
};

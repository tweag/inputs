import * as React from "react";

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  value: any;
  onChange: (value: any) => void;
};

export const Input = ({ onChange, ...props }: InputProps) => (
  <input
    {...props}
    onChange={event => onChange(event.target.value)}
  />
);

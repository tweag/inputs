import * as React from "react";
import { InputProps } from "./types";
import { useField } from "./useField";

export const Input: React.FC<InputProps> = props => {
  const field = useField("input", props);

  return (
    <div {...field.getContainerProps()}>
      {field.label && <label {...field.getLabelProps()}>{field.label}</label>}
      <input {...field.getInputProps()} />
      {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
    </div>
  );
};

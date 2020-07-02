import * as React from "react";
import { InputProps } from "./types";
import { useField } from "./useField";

export const Input: React.FC<InputProps> = props => {
  const type = props.type || "text";
  const field = useField(type, props);

  return (
    <div {...field.getContainerProps()}>
      {field.label && (
        <label {...field.getLabelProps()}>
          {field.label}
          {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
        </label>
      )}
      <input type={type} {...field.getInputProps()} />
      {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
    </div>
  );
};

import * as React from "react";
import { InputProps } from "./types";
import { useField } from "./useField";

export const Input: React.FC<InputProps> = props => {
  const type = props.type || "text";
  const field = useField(type, props);
  const isCheckbox = props.type === "checkbox" || props.type === "radio";

  const renderLabel = () =>
    field.label && <label {...field.getLabelProps()}>{field.label}</label>;

  return (
    <div {...field.getContainerProps()}>
      {!isCheckbox && renderLabel()}
      <input type={type} {...field.getInputProps()} />
      {isCheckbox && renderLabel()}
      {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
    </div>
  );
};

import * as React from "react";
import { useField } from "./useField";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = props => {
  const field = useField("checkbox", props);

  return (
    <div {...field.getContainerProps()}>
      <input type="checkbox" {...field.getInputProps()} />
      {field.label && (
        <label {...field.getLabelProps()}>
          {field.label}
          {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
        </label>
      )}
      {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
    </div>
  );
};

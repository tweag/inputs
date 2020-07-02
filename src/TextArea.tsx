import * as React from "react";
import { useField } from "./useField";
import { TextAreaProps } from "./types";

export const TextArea: React.FC<TextAreaProps> = props => {
  const field = useField("textarea", props);

  return (
    <div {...field.getContainerProps()}>
      {field.label && (
        <label {...field.getLabelProps()}>
          {field.label}
          {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
        </label>
      )}
      <textarea {...field.getInputProps()} />
      {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
    </div>
  );
};

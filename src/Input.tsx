import * as React from "react";
import { InputProps } from "./types";
import { useField } from "./useField";

export const Input: React.FC<InputProps> = props => {
  const type = props.type || "text";
  const field = useField(type, props);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      field.onChange(event.target.value);
    },
    [field.onChange]
  );

  return (
    <div {...field.getContainerProps()}>
      {field.label && (
        <label {...field.getLabelProps()}>
          {field.label}
          {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
        </label>
      )}

      <input
        {...field.getInputProps()}
        type={type}
        value={field.value}
        onChange={onChange}
      />

      {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
    </div>
  );
};

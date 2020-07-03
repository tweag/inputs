import * as React from "react";
import { useField } from "./useField";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = props => {
  const field = useField(props);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      field.onChange(event.target.checked);
    },
    [field.onChange]
  );

  return (
    <div {...field.getContainerProps()}>
      <input
        {...field.getInputProps()}
        type="checkbox"
        checked={field.value}
        onChange={onChange}
      />

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

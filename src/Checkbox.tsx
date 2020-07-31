import * as React from "react";
import { FieldProps } from "./types";
import { useFieldProps } from "./useFieldProps";

export interface CheckboxProps extends FieldProps<boolean, HTMLInputElement> {}

export function Checkbox(props: CheckboxProps) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(props, "check", "checkbox");

  const { id, value, setValue } = field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.checked);
    },
    [setValue]
  );

  return (
    <div {...getFieldProps()}>
      {prepend}
      <input
        {...inputProps}
        id={id}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      {append}
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}

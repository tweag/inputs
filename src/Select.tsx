import * as React from "react";
import { FieldProps } from "./types";
import { useFieldProps } from "./useFieldProps";

export interface SelectProps extends FieldProps<string, HTMLSelectElement> {
  placeholder?: string;
  children?: React.ReactNode;
}

export function Select(props: SelectProps) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    placeholder,
    children,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(props, "select");

  const { id, value, setValue } = field;

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <div {...getFieldProps()}>
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
      {prepend}
      <select {...inputProps} id={id} value={value} onChange={onChange}>
        {placeholder && (
          <option disabled value="" key="placeholder">
            {placeholder}
          </option>
        )}
        {children}
      </select>
      {append}
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}

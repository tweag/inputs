import * as React from "react";
import { FormField } from "@stackup/form";
import { useFieldProps } from "./useFieldProps";
import { SharedFieldProps, FieldSize } from "./types";

export interface SelectProps extends SharedFieldProps {
  field: FormField<string>;
  placeholder?: string;
  children?: React.ReactNode;
  size?: FieldSize;
  inline?: boolean;
  innerRef?: React.Ref<HTMLSelectElement>;
  inputClassName?: string;
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

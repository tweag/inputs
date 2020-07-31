import * as React from "react";
import { FormField } from "@stackup/form";
import { useFieldProps } from "./useFieldProps";
import { SharedFieldProps, FieldSize } from "./types";

export interface CheckboxProps extends SharedFieldProps {
  field: FormField<boolean>;
  size?: FieldSize;
  innerRef?: React.Ref<HTMLInputElement>;
}

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

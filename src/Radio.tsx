import * as React from "react";
import equals from "fast-deep-equal";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";
import { getDOMValue, useNestedId } from "./utilities";

export interface RadioProps<Value>
  extends FieldProps<Value, HTMLInputElement>,
    Attributes<"input"> {
  value: Value;
}

export function Radio<T>(props: RadioProps<T>) {
  const nested = { ...props, field: useNestedId(props.field) };
  const {
    field,
    label,
    help,
    error: _error,
    append,
    prepend,
    value: item,
    getFieldProps,
    getLabelProps,
    getErrorProps: _getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(nested, "check", "radio");

  const { value, setValue } = field;
  const onChange = React.useCallback(() => setValue(item), [item, setValue]);

  return (
    <div {...getFieldProps()}>
      {prepend}
      <input
        {...inputProps}
        type="radio"
        onChange={onChange}
        value={getDOMValue(props.value)}
        checked={equals(value, props.value)}
      />
      {append}
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
    </div>
  );
}

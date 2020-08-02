import * as React from "react";
import { FieldProps, Attributes } from "./types";
import { contains, getDOMValue, remove, useNestedId } from "./utilities";
import { useFieldProps } from "./useFieldProps";

export interface CheckboxItemProps<Value>
  extends FieldProps<Value[], HTMLInputElement>,
    Attributes<"input"> {
  value: Value;
}

/**
 * Manages the state of a boolean value using a checkbox.
 *
 * In addition to the props listed below, this component accepts
 * all props for an HTML input.
 *
 * #### Example
 *
 * ```jsx
 * <Checkbox
 *   label="I agree"
 *   help="Did you read all 7,000 lines?"
 *   field={useField(form, "confirmation")}
 * />
 * ```
 */
export function CheckboxItem<Value>(props: CheckboxItemProps<Value>) {
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
  } = useFieldProps(nested, "check", "checkbox");

  const { value, setValue } = field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setValue(value => (checked ? [...value, item] : remove(value, item)));
    },
    [item, setValue]
  );

  return (
    <div {...getFieldProps()}>
      {prepend}
      <input
        {...inputProps}
        type="checkbox"
        onChange={onChange}
        value={getDOMValue(item)}
        checked={contains(value, item)}
      />
      {append}
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
    </div>
  );
}

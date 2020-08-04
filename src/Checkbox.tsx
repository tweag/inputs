import * as React from "react";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";

export interface CheckboxProps
  extends FieldProps<boolean, HTMLInputElement>,
    Attributes<"input"> {}

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
  } = useFieldProps(props, ["check", "checkbox"]);

  const { value, setValue } = field;
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

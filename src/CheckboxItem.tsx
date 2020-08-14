import * as React from "react";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";
import { contains, getDOMValue, remove, useNestedId } from "./utilities";

export interface CheckboxItemProps<Value>
  extends FieldProps<Value[], HTMLInputElement>,
    Attributes<"input"> {
  /** Toggle the inclusion of this value in the array. */
  value: Value;
}

/**
 * Manages an array of values, represented by checkboxes.
 *
 * In addition to the props listed below, this component accepts
 * all props for an HTML input.
 *
 * Note that this component will not render error messages. For that, you'll
 * want to wrap your checkboxes in a FieldSet.
 *
 * #### Example
 *
 * ```jsx
 * <FieldSet legend="Sport" field={useField(form, "sport")}>
 *   <CheckboxItem
 *     label="Soccer"
 *     value={{ name: "Soccer" }}
 *     field={useField(form, "sport")}
 *   />
 *   <CheckboxItem
 *     label="Baseball"
 *     value={{ name: "Baseball" }}
 *     field={useField(form, "sport")}
 *   />
 * </FieldSet>
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
    render,
    value: item,
    getFieldProps,
    getLabelProps,
    getErrorProps: _getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(nested, ["check", "checkbox"]);

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
      {render("input", {
        ...inputProps,
        onChange,
        type: "checkbox",
        value: getDOMValue(item),
        checked: contains(value, item)
      })}
      {append}
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
    </div>
  );
}

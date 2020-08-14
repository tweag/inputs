import * as React from "react";
import equals from "fast-deep-equal";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";
import { getDOMValue, useNestedId } from "./utilities";

export interface RadioProps<Value>
  extends FieldProps<Value, HTMLInputElement>,
    Attributes<"input"> {
  /** The value of the option to be selected */
  value: Value;
}

/**
 * Renders an `<input type="radio" />` and manages the state of any type of value.
 *
 * Note that this component will not render error messages. For that, you'll
 * want to wrap your radio options in a FieldSet.
 *
 * In addition to the props listed below, this component accepts
 * all props for an HTML input.
 *
 * #### Example
 *
 * ```jsx
 * <FieldSet legend="Sport" field={useField(form, "sport")}>
 *   <Radio
 *     label="Soccer"
 *     value={{ name: "Soccer" }}
 *     field={useField(form, "sport")}
 *   />
 *   <Radio
 *     label="Baseball"
 *     value={{ name: "Baseball" }}
 *     field={useField(form, "sport")}
 *   />
 * </FieldSet>
 * ```
 */
export function Radio<Value>(props: RadioProps<Value>) {
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
  } = useFieldProps(nested, ["check", "radio"]);

  const { value, setValue } = field;
  const onChange = React.useCallback(() => setValue(item), [item, setValue]);

  return (
    <div {...getFieldProps()}>
      {prepend}
      {render("input", {
        ...inputProps,
        onChange,
        type: "radio",
        value: getDOMValue(props.value),
        checked: equals(value, props.value)
      })}
      {append}
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
    </div>
  );
}

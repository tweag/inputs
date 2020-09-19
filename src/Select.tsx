import * as React from "react";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";

type StringEnum = Record<string, string>;
type SelectValue = string | StringEnum | null;

export interface SelectProps<Value extends SelectValue>
  extends FieldProps<Value, HTMLSelectElement>,
    Attributes<"select"> {
  placeholder?: string;
  children?: React.ReactNode;
}

/**
 * Renders a `<select />` tag with whatever options you provide.
 *
 * You can provide a placeholder, which will render a disabled option
 * with a blank value.
 *
 * In addition to the props listed below, this component accepts
 * all props for an HTML select.
 *
 * #### Example
 *
 * ```jsx
 * <Select
 *   label="Sport"
 *   placeholder="Choose a sport"
 *   field={useField(form, "sport")}
 * >
 *   <option value="baseball">Baseball</option>
 *   <option value="soccer">Soccer</option>
 * </Select>
 * ```
 */
export function Select<Value extends SelectValue>(props: SelectProps<Value>) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    render,
    placeholder,
    children,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(props, ["select"]);

  const { value, setValue } = field;

  const htmlValue = value === null ? "" : (value as string);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue((event.target.value || null) as Value);
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
      {render(
        "select",
        { ...inputProps, value: htmlValue, onChange },
        placeholder && (
          <option disabled value="" key="placeholder">
            {placeholder}
          </option>
        ),
        children
      )}
      {append}
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}

import * as React from "react";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";

export interface SwitchProps
  extends FieldProps<boolean, HTMLButtonElement>,
    Attributes<"button"> {
  children?: React.ReactNode;
}

/**
 * Renders a `<button />` to toggle the state of a boolean value.
 *
 * You can style this element with CSS by selecting the `[aria-checked]`
 * value.
 *
 * In addition to the props listed below, this component accepts
 * all props for an HTML button.
 *
 * #### Example
 *
 * ```jsx
 * <Switch
 *   type="enabled"
 *   label="Show preview"
 *   field={useField(form, "enabled")}
 * />
 * ```
 */
export function Switch(props: SwitchProps) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    render,
    children,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(props, ["check", "switch"]);

  const { value, setValue } = field;
  const onClick = React.useCallback(() => {
    setValue(value => !value);
  }, [setValue]);

  return (
    <div {...getFieldProps()}>
      {prepend}
      {render(
        "button",
        {
          ...inputProps,
          type: "button",
          role: "switch",
          onClick,
          "aria-checked": value,
          "aria-label": value ? "On" : "Off"
        },
        children
      )}
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}

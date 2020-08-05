import * as React from "react";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";

export type InputType =
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "month"
  | "number"
  | "password"
  | "range"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface InputProps
  extends FieldProps<string, HTMLInputElement>,
    Attributes<"input"> {
  type?: InputType;
}

/**
 * Renders an `<input />`, which whatever type you provide.
 *
 * The value of this input will always be a string, but you should use a
 * validation library such as [@stackup/validate](https://github.com/rzane/validate)
 * to parse and validate the entry before submission.
 *
 * In addition to the props listed below, this component accepts
 * all props for an HTML input.
 *
 * #### Example
 *
 * ```jsx
 * <Input
 *   type="email"
 *   label="Email"
 *   field={useField(form, "email")}
 * />
 * ```
 */
export function Input(props: InputProps) {
  const { type = "text" } = props;
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
  } = useFieldProps(props, ["input", type]);

  const { value, setValue } = field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <input {...inputProps} value={value} type={type} onChange={onChange} />
      {append}
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}

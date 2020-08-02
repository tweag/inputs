import * as React from "react";
import { useFieldProps } from "./useFieldProps";
import { FieldProps, Attributes } from "./types";

export interface FileInputProps
  extends FieldProps<File | null, HTMLInputElement>,
    Attributes<"input"> {}

/**
 * Renders an `<input type="file" />`.
 *
 * In addition to the props listed below, this component accepts
 * all props for an HTML input.
 *
 * #### Example
 *
 * ```jsx
 * <FileInput label="Image" field={useField(form, "image")} />
 * ```
 */
export function FileInput(props: FileInputProps) {
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
  } = useFieldProps(props, "file");

  const { setValue } = field;

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files?.[0] || null);
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
      <input {...inputProps} type="file" onChange={onChange} />
      {append}
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}

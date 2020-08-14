import * as React from "react";
import { FieldProps, Attributes } from "./types";
import { useFieldProps } from "./useFieldProps";

export interface FileListInputProps
  extends FieldProps<FileList | null, HTMLInputElement>,
    Attributes<"input"> {}

/**
 * Renders an `<input type="file" multiple />`.
 *
 * In addition to the props listed below, this component accepts
 * all props for an HTML input.
 *
 * #### Example
 *
 * ```jsx
 * <FileListInput label="Images" field={useField(form, "images")} />
 * ```
 */
export function FileListInput(props: FileListInputProps) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    render,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(props, ["input", "file"]);

  const { setValue } = field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files);
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
      {render("input", {
        ...inputProps,
        type: "file",
        multiple: true,
        onChange
      })}
      {append}
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}

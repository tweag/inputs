import * as React from "react";
import { useFieldProps } from "./useFieldProps";
import { FieldProps } from "./types";

export interface FileListInputProps
  extends FieldProps<FileList | null, HTMLInputElement> {}

export function FileListInput(props: FileListInputProps) {
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
      <input {...inputProps} type="file" multiple onChange={onChange} />
      {append}
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}

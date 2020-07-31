import * as React from "react";
import { useFieldProps } from "./useFieldProps";
import { FieldProps } from "./types";

export interface FileInputProps
  extends FieldProps<File | null, HTMLInputElement> {}

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

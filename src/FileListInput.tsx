import * as React from "react";
import { Field } from "@stackup/form";
import { HTMLProps, useBlur } from "./utilities";
import { useField, FieldProps } from "./useField";

export interface FileListInputProps
  extends FieldProps,
    HTMLProps<HTMLInputElement> {
  field: Field<FileList | null>;
}

export function FileListInput(props: FileListInputProps) {
  const layout = useField(props);
  const onBlur = useBlur(props.field);

  const { setValue } = props.field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files);
    },
    [setValue]
  );

  return (
    <div {...layout.getFieldProps()}>
      {layout.label && (
        <label {...layout.getLabelProps()}>
          {layout.label}
          {layout.help && <span {...layout.getHelpProps()}>{layout.help}</span>}
        </label>
      )}
      {layout.prepend}
      <input
        type="file"
        multiple
        onBlur={onBlur}
        onChange={onChange}
        {...layout.getInputProps()}
      />
      {layout.append}
      {layout.error && <span {...layout.getErrorProps()}>{layout.error}</span>}
    </div>
  );
}

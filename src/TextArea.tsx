import * as React from "react";
import { Field } from "@stackup/form";
import { HTMLProps, useBlur } from "./utilities";
import { useField, FieldProps } from "./useField";

export interface TextAreaProps
  extends FieldProps,
    HTMLProps<HTMLTextAreaElement> {
  field: Field<string>;
}

export function TextArea(props: TextAreaProps) {
  const layout = useField(props);
  const onBlur = useBlur(props.field);

  const { value, setValue } = props.field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
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
      <textarea
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...layout.getInputProps()}
      />
      {layout.append}
      {layout.error && <span {...layout.getErrorProps()}>{layout.error}</span>}
    </div>
  );
}

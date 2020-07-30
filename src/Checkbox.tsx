import * as React from "react";
import { Field } from "@stackup/form";
import { HTMLProps, useBlur } from "./utilities";
import { useField, FieldProps } from "./useField";

export interface CheckboxProps extends FieldProps, HTMLProps<HTMLInputElement> {
  field: Field<boolean>;
}

export function Checkbox(props: CheckboxProps) {
  const layout = useField(props);
  const onBlur = useBlur(props.field);

  const { value, setValue } = props.field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.checked);
    },
    [setValue]
  );

  return (
    <div {...layout.getFieldProps()}>
      <input
        type="checkbox"
        checked={value}
        onBlur={onBlur}
        onChange={onChange}
        {...layout.getInputProps()}
      />

      {layout.label && (
        <label {...layout.getLabelProps()}>
          {layout.label}
          {layout.help && <span {...layout.getHelpProps()}>{layout.help}</span>}
        </label>
      )}

      {layout.error && <span {...layout.getErrorProps()}>{layout.error}</span>}
    </div>
  );
}

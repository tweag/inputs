import * as React from "react";
import { HTMLProps, useBlur } from "./utilities";
import { useField, FieldProps } from "./useField";

export interface InputProps extends FieldProps, HTMLProps<HTMLInputElement> {
  value?: string;
  onChangeValue?: (value: string) => void;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export function Input(props: InputProps) {
  const layout = useField(props);
  const onBlur = useBlur(props.field);

  const { value, setValue } = props.field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <input
        type="text"
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

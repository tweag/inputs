import * as React from "react";
import { Field } from "@stackup/form";
import { HTMLProps, useBlur } from "./utilities";
import { useField, FieldProps } from "./useField";

export interface SelectProps extends FieldProps, HTMLProps<HTMLSelectElement> {
  field: Field<string>;
  placeholder?: string;
  children?: React.ReactNode;
}

export function Select(props: SelectProps) {
  const { placeholder, children, ...otherProps } = props;

  const layout = useField(otherProps);
  const onBlur = useBlur(props.field);

  const { value, setValue } = props.field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
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
      <select
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...layout.getInputProps()}
      >
        {placeholder && (
          <option disabled value="" key="placeholder">
            {placeholder}
          </option>
        )}

        {children}
      </select>
      {layout.append}
      {layout.error && <span {...layout.getErrorProps()}>{layout.error}</span>}
    </div>
  );
}

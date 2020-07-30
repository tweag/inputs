import * as React from "react";
import { Field } from "@stackup/form";
import { HTMLProps, useBlur } from "./utilities";
import { useField, FieldProps } from "./useField";

export interface SwitchProps extends FieldProps, HTMLProps<HTMLButtonElement> {
  field: Field<boolean>;
  children?: React.ReactNode;
}

export function Switch(props: SwitchProps) {
  const { children, ...otherProps } = props;

  const layout = useField(otherProps);
  const onBlur = useBlur(props.field);

  const { value, setValue } = props.field;
  const onClick = React.useCallback(() => {
    setValue(value => !value);
  }, [setValue]);

  return (
    <div {...layout.getFieldProps()}>
      <button
        onBlur={onBlur}
        onClick={onClick}
        role="switch"
        aria-checked={value}
        aria-label={value ? "On" : "Off"}
        {...layout.getInputProps()}
        type="button"
      >
        {children}
      </button>

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

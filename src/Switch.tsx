import * as React from "react";
import { FieldProps } from "./types";
import { useFieldProps } from "./useFieldProps";

export interface SwitchProps extends FieldProps<boolean, HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Switch(props: SwitchProps) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    children,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(props, "check", "switch");

  const { value, setValue } = field;
  const onClick = React.useCallback(() => {
    setValue(value => !value);
  }, [setValue]);

  return (
    <div {...getFieldProps()}>
      {prepend}
      <button
        {...inputProps}
        type="button"
        role="switch"
        onClick={onClick}
        aria-checked={value}
        aria-label={value ? "On" : "Off"}
      >
        {children}
      </button>
      <label {...getLabelProps()}>
        {label}
        {help && <span {...getHelpProps()}>{help}</span>}
      </label>
      {error && <span {...getErrorProps()}>{error}</span>}
    </div>
  );
}

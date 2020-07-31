import * as React from "react";
import { FormField } from "@stackup/form";
import { useFieldProps } from "./useFieldProps";
import { SharedFieldProps, FieldSize } from "./types";

export interface SwitchProps extends SharedFieldProps {
  field: FormField<boolean>;
  children?: React.ReactNode;
  size?: FieldSize;
  innerRef?: React.Ref<HTMLButtonElement>;
  inputClassName?: string;
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

  const { id, value, setValue } = field;
  const onClick = React.useCallback(() => {
    setValue(value => !value);
  }, [setValue]);

  return (
    <div {...getFieldProps()}>
      {prepend}
      <button
        {...inputProps}
        id={id}
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
    </div>
  );
}

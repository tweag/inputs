import * as React from "react";
import { HTMLProps } from "./utilities";
import { customize } from "./customize";
import { useField, FieldProps } from "./useField";

export interface ToggleButtonProps
  extends FieldProps,
    HTMLProps<HTMLButtonElement> {
  value?: boolean;
  onChangeValue?: (value: boolean) => void;
  children?: React.ReactNode;
}

export function ToggleButton(props: ToggleButtonProps) {
  const { value, onChangeValue, children, ...otherProps } = props;

  const field = useField(otherProps);
  const handleClick = React.useCallback(
    () => onChangeValue && onChangeValue(!value),
    [value, onChangeValue]
  );

  return (
    <div {...field.getFieldProps()}>
      <button
        onClick={handleClick}
        role="switch"
        aria-checked={value}
        aria-label={value ? "On" : "Off"}
        {...field.getInputProps()}
        type="button"
      >
        {children}
      </button>

      {field.label && (
        <label {...field.getLabelProps()}>
          {field.label}
          {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
        </label>
      )}
      {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
    </div>
  );
}

export const createToggleButton = customize(ToggleButton);

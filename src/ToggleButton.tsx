import * as React from "react";
import { useConfig, Config } from "./useConfig";
import { useField, FieldProps } from "./useField";
import { HTMLProps } from "./utilities";

export interface ToggleButtonProps
  extends FieldProps,
    HTMLProps<HTMLButtonElement> {
  value?: boolean;
  onChangeValue?: (value: boolean) => void;
  children?: React.ReactNode;
}

export function createToggleButton<T>(config: Config<ToggleButtonProps, T>) {
  return function ToggleButton(props: ToggleButtonProps & T) {
    const { value, onChangeValue, children, ...otherProps } = useConfig(
      config,
      props
    );

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
  };
}

export const ToggleButton = createToggleButton({});

import * as React from "react";
import { HTMLProps } from "./utilities";
import { useConfig, Config } from "./useConfig";
import { useField, FieldProps } from "./useField";

export interface SwitchProps extends FieldProps, HTMLProps<HTMLButtonElement> {
  value?: boolean;
  onChangeValue?: (value: boolean) => void;
  children?: React.ReactNode;
}

export function createSwitch<T>(config: Config<SwitchProps, T>) {
  return function Switch(props: SwitchProps & T) {
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

export const Switch = createSwitch({});

import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { Element, Theme, HTMLField } from "./types";

export interface ToggleButtonProps extends HTMLField<HTMLButtonElement> {
  value?: boolean;
  onChangeValue?: (value: boolean) => void;
  children?: React.ReactNode;
}

export function createToggleButton<ThemeProps>(
  theme: Theme<ThemeProps, ToggleButtonProps>
) {
  return function ToggleButton(props: ToggleButtonProps & ThemeProps): Element {
    const { value, onChangeValue, children, ...otherProps } = applyTheme(
      props,
      theme
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
          type="button"
          role="switch"
          aria-checked={value}
          aria-label={value ? "On" : "Off"}
          {...field.getInputProps()}
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

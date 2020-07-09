import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { Element, Theme, ToggleButtonProps } from "./types";

export function createToggleButton<ThemeProps>(
  theme: Theme<ThemeProps, ToggleButtonProps>
) {
  return function ToggleButton(props: ToggleButtonProps & ThemeProps): Element {
    const { children, ...fieldConfig } = applyTheme(props, theme);
    const field = useField(fieldConfig);

    const { value, onChange } = field;
    const handleClick = React.useCallback(() => {
      onChange && onChange(!value);
    }, [value, onChange]);

    return (
      <div {...field.getFieldProps()}>
        <button
          onClick={handleClick}
          type="button"
          role="switch"
          aria-checked={field.value}
          aria-label={field.value ? "On" : "Off"}
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

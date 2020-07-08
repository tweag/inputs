import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { Element, Theme, ToggleButtonProps } from "./types";

export function createToggleButton<ThemeProps>(
  theme: Theme<ThemeProps, ToggleButtonProps>
) {
  return function ToggleButton(props: ToggleButtonProps & ThemeProps): Element {
    const field = useField(applyTheme(props, theme));

    const onClick = React.useCallback(() => {
      field.onChange && field.onChange(!field.value);
    }, [field.value, field.onChange]);

    return (
      <div {...field.getFieldProps()}>
        <button
          onClick={onClick}
          type="button"
          role="switch"
          aria-checked={field.value}
          aria-label={field.value ? "On" : "Off"}
          {...field.getInputProps()}
        />
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

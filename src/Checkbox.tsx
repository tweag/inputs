import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { CheckboxProps, Element, Theme } from "./types";

export function createCheckbox<ThemeProps>(
  theme: Theme<ThemeProps, CheckboxProps>
) {
  return function Checkbox(props: CheckboxProps & ThemeProps): Element {
    const field = useField(applyTheme(props, theme));

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        field.onChange && field.onChange(event.target.checked);
      },
      [field.onChange]
    );

    return (
      <div {...field.getFieldProps()}>
        <input
          {...field.getInputProps()}
          type="checkbox"
          checked={field.value}
          onChange={onChange}
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

export const Checkbox = createCheckbox({});

import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { Element, Theme, HTMLField } from "./types";

export interface CheckboxProps extends HTMLField<HTMLInputElement> {
  value?: boolean;
  onChangeValue?: (value: boolean) => void;
}

export function createCheckbox<ThemeProps>(
  theme: Theme<ThemeProps, CheckboxProps>
) {
  return function Checkbox(props: CheckboxProps & ThemeProps): Element {
    const { value, onChange, onChangeValue, ...otherProps } = applyTheme(
      props,
      theme
    );

    const field = useField(otherProps);
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        onChangeValue && onChangeValue(event.target.checked);
      },
      [onChange, onChangeValue]
    );

    return (
      <div {...field.getFieldProps()}>
        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
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

export const Checkbox = createCheckbox({});

import * as React from "react";
import { HTMLProps } from "./utilities";
import { applyTheme, Theme } from "./theme";
import { useField, FieldProps } from "./useField";

export interface CheckboxProps extends FieldProps, HTMLProps<HTMLInputElement> {
  value?: boolean;
  onChangeValue?: (value: boolean) => void;
}

export function createCheckbox<ThemeProps>(
  theme: Theme<ThemeProps, CheckboxProps>
) {
  return function Checkbox(props: CheckboxProps & ThemeProps) {
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

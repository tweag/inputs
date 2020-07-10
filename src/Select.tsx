import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { Element, Theme, HTMLField } from "./types";

export interface SelectProps extends HTMLField<HTMLSelectElement> {
  value?: string;
  onChangeValue?: (value: string) => void;
  placeholder?: string;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  children?: React.ReactNode;
}

export function createSelect<ThemeProps>(
  theme: Theme<ThemeProps, SelectProps>
) {
  return function Select(props: SelectProps & ThemeProps): Element {
    const {
      value,
      onChange,
      onChangeValue,
      placeholder,
      append,
      prepend,
      children,
      ...otherProps
    } = applyTheme(props, theme);

    const field = useField(otherProps);
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(event);
        onChangeValue && onChangeValue(event.target.value);
      },
      [onChange, onChangeValue]
    );

    return (
      <div {...field.getFieldProps()}>
        {field.label && (
          <label {...field.getLabelProps()}>
            {field.label}
            {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
          </label>
        )}
        {prepend}
        <select
          value={value}
          onChange={handleChange}
          {...field.getInputProps()}
        >
          {placeholder && (
            <option disabled value="" key="placeholder">
              {placeholder}
            </option>
          )}

          {children}
        </select>
        {append}
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const Select = createSelect({});

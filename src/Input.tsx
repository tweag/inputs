import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { InputProps, Element, Theme } from "./types";

export function createInput<ThemeProps>(theme: Theme<ThemeProps, InputProps>) {
  return function Input(props: InputProps & ThemeProps): Element {
    const {
      value,
      onChange,
      onChangeValue,
      append,
      prepend,
      ...otherProps
    } = applyTheme(props, theme);

    const field = useField(otherProps);
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <input
          type="text"
          value={value}
          onChange={handleChange}
          {...field.getInputProps()}
        />
        {append}
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const Input = createInput({});

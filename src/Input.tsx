import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { InputProps, Element, Theme } from "./types";

export function createInput<ThemeProps>(theme: Theme<ThemeProps, InputProps>) {
  return function Input(props: InputProps & ThemeProps): Element {
    const { append, prepend, ...fieldConfig } = applyTheme(props, theme);
    const field = useField(fieldConfig);

    const { onChange } = field;
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.value);
      },
      [onChange]
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
          value={field.value}
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

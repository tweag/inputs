import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { TextAreaProps, Element, Theme } from "./types";

export function createTextArea<ThemeProps>(
  theme: Theme<ThemeProps, TextAreaProps>
) {
  return function TextArea(props: TextAreaProps & ThemeProps): Element {
    const { value, onChange, ...otherProps } = applyTheme(props, theme);

    const field = useField(otherProps);
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

        <textarea
          value={value}
          onChange={handleChange}
          {...field.getInputProps()}
        />

        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const TextArea = createTextArea({});

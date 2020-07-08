import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { FileInputProps, Element, Theme } from "./types";

export function createFileInput<ThemeProps>(
  theme: Theme<ThemeProps, FileInputProps>
) {
  return function FileInput(props: FileInputProps & ThemeProps): Element {
    const { append, prepend, ...fieldConfig } = applyTheme(props, theme);
    const field = useField({ ...fieldConfig, value: undefined });

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        field.onChange && field.onChange(event.target.files![0]);
      },
      [field.onChange]
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
        <input type="file" onChange={onChange} {...field.getInputProps()} />
        {append}
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const FileInput = createFileInput({});

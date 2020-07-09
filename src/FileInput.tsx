import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { Element, Theme, HTMLField } from "./types";

export interface FileInputProps extends HTMLField<HTMLInputElement> {
  value?: any;
  onChangeValue?: (value: File) => void;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export function createFileInput<ThemeProps>(
  theme: Theme<ThemeProps, FileInputProps>
) {
  return function FileInput(props: FileInputProps & ThemeProps): Element {
    const {
      value: _value,
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
        onChangeValue && onChangeValue(event.target.files![0]);
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
        <input type="file" onChange={handleChange} {...field.getInputProps()} />
        {append}
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const FileInput = createFileInput({});

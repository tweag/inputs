import * as React from "react";
import { HTMLProps } from "./utilities";
import { useTheme, Theme } from "./useTheme";
import { useField, FieldProps } from "./useField";

export interface FileListInputProps
  extends FieldProps,
    HTMLProps<HTMLInputElement> {
  value?: any;
  onChangeValue?: (value: FileList) => void;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export function createFileListInput<ThemeProps>(
  theme: Theme<ThemeProps, FileListInputProps>
) {
  return function FileListInput(props: FileListInputProps & ThemeProps) {
    const {
      value: _value,
      onChange,
      onChangeValue,
      append,
      prepend,
      ...otherProps
    } = useTheme(props, theme);

    const field = useField(otherProps);
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        onChangeValue && onChangeValue(event.target.files!);
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
          type="file"
          multiple
          onChange={handleChange}
          {...field.getInputProps()}
        />
        {append}
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const FileListInput = createFileListInput({});

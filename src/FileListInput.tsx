import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { Element, Theme, FileListInputProps } from "./types";

export function createFileListInput<ThemeProps>(
  theme: Theme<ThemeProps, FileListInputProps>
) {
  return function FileListInput(
    props: FileListInputProps & ThemeProps
  ): Element {
    const { append, prepend, ...fieldProps } = applyTheme(props, theme);
    const field = useField({ ...fieldProps, value: undefined });

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        field.onChange(event.target.files!);
      },
      [field.onChange]
    );

    return (
      <div {...field.getContainerProps()}>
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
          onChange={onChange}
          {...field.getInputProps()}
        />
        {append}
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const FileListInput = createFileListInput({});

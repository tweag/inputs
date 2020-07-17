import * as React from "react";
import { HTMLProps } from "./utilities";
import { useConfig, Config } from "./useConfig";
import { useField, FieldProps } from "./useField";

export interface FileInputProps
  extends FieldProps,
    HTMLProps<HTMLInputElement> {
  value?: any;
  onChangeValue?: (value: File) => void;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export function createFileInput<T>(config: Config<FileInputProps, T>) {
  return function FileInput(props: FileInputProps & T) {
    const {
      value: _value,
      onChange,
      onChangeValue,
      append,
      prepend,
      ...otherProps
    } = useConfig(config, props);

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

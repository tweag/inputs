import * as React from "react";
import { HTMLProps } from "./utilities";
import { useConfig, Config } from "./useConfig";
import { useField, FieldProps } from "./useField";

export interface InputProps extends FieldProps, HTMLProps<HTMLInputElement> {
  value?: string;
  onChangeValue?: (value: string) => void;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export function createInput<T>(config: Config<InputProps, T>) {
  return function Input(props: InputProps & T) {
    const {
      value,
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

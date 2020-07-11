import * as React from "react";
import { HTMLProps } from "./utilities";
import { useConfig, Config } from "./useConfig";
import { useField, FieldProps } from "./useField";

export interface CheckboxProps extends FieldProps, HTMLProps<HTMLInputElement> {
  value?: boolean;
  onChangeValue?: (value: boolean) => void;
}

export function createCheckbox<ExtraProps>(
  config: Config<CheckboxProps, ExtraProps>
) {
  return function Checkbox(props: CheckboxProps & ExtraProps) {
    const { value, onChange, onChangeValue, ...otherProps } = useConfig(
      config,
      props
    );

    const field = useField(otherProps);
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        onChangeValue && onChangeValue(event.target.checked);
      },
      [onChange, onChangeValue]
    );

    return (
      <div {...field.getFieldProps()}>
        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
          {...field.getInputProps()}
        />

        {field.label && (
          <label {...field.getLabelProps()}>
            {field.label}
            {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
          </label>
        )}

        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const Checkbox = createCheckbox({});

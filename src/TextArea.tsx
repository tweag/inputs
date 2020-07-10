import * as React from "react";
import { HTMLProps } from "./utilities";
import { applyTheme, Theme } from "./theme";
import { useField, FieldProps } from "./useField";

export interface TextAreaProps
  extends FieldProps,
    HTMLProps<HTMLTextAreaElement> {
  value?: string;
  onChangeValue?: (value: string) => void;
}

export function createTextArea<ThemeProps>(
  theme: Theme<ThemeProps, TextAreaProps>
) {
  return function TextArea(props: TextAreaProps & ThemeProps) {
    const { value, onChange, onChangeValue, ...otherProps } = applyTheme(
      props,
      theme
    );

    const field = useField(otherProps);
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

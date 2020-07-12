import * as React from "react";
import { HTMLProps } from "./utilities";
import { customize } from "./customize";
import { useField, FieldProps } from "./useField";

export interface TextAreaProps
  extends FieldProps,
    HTMLProps<HTMLTextAreaElement> {
  value?: string;
  onChangeValue?: (value: string) => void;
}

export function TextArea(props: TextAreaProps) {
  const { value, onChange, onChangeValue, ...otherProps } = props;

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
}

export const createTextArea = customize(TextArea);

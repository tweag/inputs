import * as React from "react";
import { useField } from "./useField";
import { TextAreaProps, Element, GetProps } from "./types";

export function createTextArea<E>(getProps: GetProps<TextAreaProps, E>) {
  return function TextArea(props: TextAreaProps & E): Element {
    const field = useField(getProps(props));

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        field.onChange(event.target.value);
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

        <textarea
          {...field.getInputProps()}
          value={field.value}
          onChange={onChange}
        />

        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const TextArea = createTextArea(props => props);

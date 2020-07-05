import * as React from "react";
import { useField } from "./useField";
import { InputProps, Element, GetProps } from "./types";

export function createInput<E>(getProps: GetProps<InputProps, E>) {
  return function Input(props: InputProps & E): Element {
    const field = useField(getProps(props));

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
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

        <input
          type="text"
          value={field.value}
          onChange={onChange}
          {...field.getInputProps()}
        />

        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const Input = createInput(props => props);

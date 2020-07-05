import * as React from "react";
import { useField } from "./useField";
import { SelectProps, OptionProps, Element, GetProps } from "./types";

const coerce = (option: OptionProps | string): OptionProps => {
  return typeof option === "string"
    ? { label: option, value: option, key: option }
    : option;
};

export function createSelect<E>(getProps: GetProps<SelectProps, E>) {
  return function Select(props: SelectProps & E): Element {
    const {
      placeholder,
      options,
      append,
      prepend,
      children,
      ...fieldProps
    } = getProps(props);

    const field = useField(fieldProps);

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        field.onChange(event.target.value);
      },
      [field.onChange]
    );

    const renderOption = (option: OptionProps | string) => {
      const { value, label = value, key = value, ...props } = coerce(option);

      return (
        <option key={key} value={value} {...props}>
          {label}
        </option>
      );
    };

    return (
      <div {...field.getContainerProps()}>
        {field.label && (
          <label {...field.getLabelProps()}>
            {field.label}
            {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
          </label>
        )}
        {prepend}
        <select
          {...field.getInputProps()}
          value={field.value}
          onChange={onChange}
        >
          {placeholder && (
            <option disabled value="" key="placeholder">
              {placeholder}
            </option>
          )}

          {options?.map(renderOption)}
          {children}
        </select>
        {append}
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const Select = createSelect(props => props);

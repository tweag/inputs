import * as React from "react";
import { useField } from "./useField";
import { SelectProps, OptionProps } from "./types";

const coerce = (option: OptionProps | string): OptionProps => {
  return typeof option === "string"
    ? { label: option, value: option, key: option }
    : option;
};

export const Select: React.FC<SelectProps> = ({
  placeholder,
  options,
  ...props
}) => {
  const field = useField("select", props);

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

      <select {...field.getInputProps()}>
        {placeholder && (
          <option disabled value="" key="placeholder">
            {placeholder}
          </option>
        )}

        {options?.map(renderOption)}
      </select>

      {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
    </div>
  );
};

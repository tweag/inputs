import * as React from "react";
import { CustomInputProps } from "./types";
import { asFormik } from "./asFormik";

export interface SelectOption extends React.HTMLProps<HTMLOptionElement> {
  value: string;
  label: string;
  key?: any;
}

export interface SelectProps
  extends CustomInputProps<HTMLSelectElement, string | null> {
  placeholder?: string;
  options: Array<SelectOption | string>;
}

const getOptionProps = ({
  label: _label,
  value,
  key = value,
  ...option
}: SelectOption) => ({
  key,
  value,
  ...option
});

export const Select: React.FC<SelectProps> = ({
  onChange,
  options,
  placeholder,
  value,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return (
    <select
      {...props}
      value={value === null ? "" : value}
      onChange={handleChange}
    >
      {placeholder && (
        <option disabled value="" key="placeholder">
          {placeholder}
        </option>
      )}

      {options.map(option =>
        typeof option === "string" ? (
          <option value={option} key={option}>
            {option}
          </option>
        ) : (
          <option {...getOptionProps(option)}>{option.label}</option>
        )
      )}
    </select>
  );
};

export const FormikSelect = asFormik(Select);

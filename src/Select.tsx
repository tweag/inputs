import React, { useCallback } from "react";
import { CustomInputProps } from "./types";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends CustomInputProps<HTMLSelectElement, string> {
  placeholder?: string;
  options: Array<SelectOption | string>;
}

export const Select = ({
  onChange,
  options,
  placeholder,
  value,
  ...props
}: SelectProps) => {
  const handleChange = useCallback(event => onChange(event.target.value), [
    onChange
  ]);

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
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        )
      )}
    </select>
  );
};

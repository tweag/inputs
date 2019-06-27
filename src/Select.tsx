import React, { useCallback } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export type SelectProps = React.HTMLProps<HTMLSelectElement> & {
  placeholder?: string;
  options: Array<SelectOption | string>;
  onChange: (value: string) => void;
};

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

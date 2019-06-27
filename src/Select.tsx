import React from "react";

export type SelectProps = React.HTMLProps<HTMLSelectElement> & {
  placeholder?: string;
  options: Array<string | { value: string; label: string }>;
};

export const Select = ({
  options,
  placeholder,
  value,
  ...props
}: SelectProps) => (
  <select {...props} value={value === null ? "" : value}>
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

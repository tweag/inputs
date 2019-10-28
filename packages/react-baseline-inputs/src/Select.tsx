import * as React from "react";
import { Field } from "./Field";
import { SelectProps, SelectOptionProps } from "./types";

const getOptionProps = ({
  label: _label,
  value,
  key = value,
  ...option
}: SelectOptionProps) => ({
  key,
  value,
  ...option
});

/**
 * An HTML `<select />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It accepts a `placeholder`.
 *   * It allows you to pass in an array of options.
 */
export const Select: React.FC<SelectProps> = ({
  onChange,
  options = [],
  placeholder,
  value,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return (
    <Field
      render={inputProps => (
        <select
          value={value === null ? "" : value}
          onChange={handleChange}
          {...inputProps}
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
      )}
      {...props}
    />
  );
};

import * as React from "react";
import { Field } from "./Field";
import { CheckboxListProps, CheckboxListOptionProps } from "./types";

const getCheckboxProps = (option: CheckboxListOptionProps | string) => {
  if (typeof option === "string") {
    return { value: option, key: option, label: option };
  }

  const { value, label = value, key = value, ...props } = option;
  return { value, label, key, ...props };
};

const remove = (items: any[], item: any) => {
  const result = items.concat([]);
  result.splice(items.indexOf(item), 1);
  return result;
};

export const CheckboxList: React.FC<CheckboxListProps> = ({
  value,
  onChange,
  options = [],
  ...props
}) => {
  const values = value || [];
  const handleChange = React.useCallback(
    event => {
      const { checked, value } = event.target;

      if (checked) {
        onChange([...values, value]);
      } else {
        onChange(remove(values, value));
      }
    },
    [onChange]
  );

  return (
    <>
      {options.map(option => {
        const checkbox = getCheckboxProps(option);

        return (
          <Field
            inline
            key={checkbox.key}
            label={checkbox.label}
            disabled={checkbox.disabled}
            render={inputProps => (
              <input
                {...inputProps}
                type="checkbox"
                checked={values.includes(checkbox.value)}
                value={checkbox.value}
                onChange={handleChange}
              />
            )}
            {...props}
          />
        );
      })}
    </>
  );
};

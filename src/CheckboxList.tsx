import * as React from "react";
import { Field } from "./Field";
import { CheckboxListProps, OptionProps } from "./types";
import { useTheme } from "./theme";

const getCheckboxProps = (option: OptionProps | string) => {
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
  theme = useTheme("checkbox"),
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
    [onChange, value]
  );

  return (
    <React.Fragment>
      {options.map(option => {
        const checkbox = getCheckboxProps(option);

        return (
          <Field
            theme={theme}
            key={checkbox.key}
            label={checkbox.label}
            labelPosition="after"
            disabled={checkbox.disabled}
            render={inputProps => (
              <input
                type="checkbox"
                checked={values.includes(checkbox.value)}
                value={checkbox.value}
                onChange={handleChange}
                {...inputProps}
              />
            )}
            {...props}
          />
        );
      })}
    </React.Fragment>
  );
};

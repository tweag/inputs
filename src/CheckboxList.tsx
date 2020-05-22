import * as React from "react";
import { Field } from "./Field";
import { FieldSet } from "./FieldSet";
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
  theme: _theme,
  legend,
  wrapper = true,
  error,
  touched,
  ...props
}) => {
  const theme = useTheme("checkbox", _theme);

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

  const [Wrapper, wrapperProps] = wrapper
    ? [FieldSet, { legend, error, touched }]
    : [React.Fragment, {}];

  return (
    <Wrapper {...wrapperProps}>
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
    </Wrapper>
  );
};

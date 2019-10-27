import * as React from "react";
import { Field } from "./Field";
import { RadioGroupProps, RadioGroupOptionProps } from "./types";

const getRadioProps = (option: RadioGroupOptionProps | string) => {
  if (typeof option === "string") {
    return { value: option, key: option, label: option };
  }

  const { value, label = value, key = value, ...props } = option;
  return { value, label, key, ...props };
};

/**
 * A list of HTML `<input type="radio" />` inputs
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onChange,
  options = [],
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return (
    <>
      {options.map(option => {
        const meta = getRadioProps(option);

        return (
          <Field
            inline
            key={meta.key}
            label={meta.label}
            disabled={meta.disabled}
            render={inputProps => (
              <input
                {...inputProps}
                type="radio"
                checked={meta.value === value}
                value={meta.value}
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

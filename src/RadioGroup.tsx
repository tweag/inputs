import * as React from "react";
import { Field } from "./Field";
import { RadioGroupProps, RadioGroupOption } from "./types";

const getRadioProps = (option: RadioGroupOption | string) => {
  if (typeof option === "string") {
    return { value: option, key: option, label: option };
  }
  const { value, label = value, ...props } = option;
  return { value, label, ...props };
};

/**
 * A list of HTML `<input type="radio" />` inputs
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  title,
  name,
  options,
  inline,
  value,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return (
    <>
      {options.map((option, idx) => {
        const meta = getRadioProps(option);

        return (
          <Field
            inline
            label={meta.label}
            key={meta.key || idx}
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

import * as React from "react";
import { Field } from "./Field";
import { RadioGroupProps, OptionProps } from "./types";
import { useTheme } from "./config";

const getRadioProps = (option: OptionProps | string) => {
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
  theme = useTheme("radioGroup"),
  options = [],
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return (
    <React.Fragment>
      {options.map(option => {
        const radio = getRadioProps(option);

        return (
          <Field
            theme={theme}
            key={radio.key}
            label={radio.label}
            labelPosition="after"
            disabled={radio.disabled}
            render={inputProps => (
              <input
                type="radio"
                checked={radio.value === value}
                value={radio.value}
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

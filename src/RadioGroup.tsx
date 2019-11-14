import * as React from "react";
import { Field } from "./Field";
import { FieldSet } from "./FieldSet";
import { RadioGroupProps, OptionProps } from "./types";
import { useTheme } from "./theme";

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
  title,
  wrapper = true,
  error,
  touched,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  const [Wrapper, wrapperProps] = wrapper
    ? [FieldSet, { legend: title, error, touched }]
    : [React.Fragment, {}];

  return (
    <Wrapper {...wrapperProps}>
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
    </Wrapper>
  );
};

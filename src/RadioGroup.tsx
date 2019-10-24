import * as React from "react";
import { Field } from "./Field";
import { FieldSet } from "./FieldSet";
import { RadioGroupProps } from "./types";

/**
 * A list of HTML `<input type="radio" />` inputs,
 * grouped inside a `<fieldset>` and labelled with a
 * `<legend>`
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
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <FieldSet name={title} inline={inline} {...props}>
      {options.map((option, idx) => {
        const meta = {
          label: "",
          disabled: false,
          value: "",
          key: ""
        };

        if (typeof option === "string") {
          meta.label = option;
          meta.value = option;
          meta.key = option;
        } else {
          meta.label = option.label;
          meta.disabled = option.disabled || false;
          meta.value = option.value;
          meta.key = option.key || idx;
        }

        return (
          <Field
            inline
            label={meta.label}
            key={meta.key}
            disabled={meta.disabled}
            render={inputProps => (
              <input
                {...inputProps}
                name={name}
                type="radio"
                checked={value === meta.value}
                value={meta.value}
                onChange={handleChange}
              />
            )}
            {...props}
          />
        );
      })}
    </FieldSet>
  );
};

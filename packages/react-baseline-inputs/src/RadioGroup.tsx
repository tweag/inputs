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
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value || null),
    [onChange]
  );

  return (
    <FieldSet name={title} {...props}>
      {options.map((option, idx) => (
        <Field
          inline
          label={option.label}
          key={idx}
          disabled={option.disabled}
          render={inputProps => (
            <input
              {...inputProps}
              name={name}
              type="radio"
              value={option.value || ""}
              onChange={handleChange}
            />
          )}
          {...props}
        />
      ))}
    </FieldSet>
  );
};

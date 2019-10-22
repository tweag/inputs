import * as React from "react";
import { Radio } from "./Radio";
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
      {options.map(option => (
        <Radio
          name={name}
          key={option.key}
          value={option.value}
          label={option.label}
          onChange={handleChange}
        />
      ))}
    </FieldSet>
  );
};

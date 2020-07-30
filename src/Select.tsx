import * as React from "react";
import { Field } from "./Field";
import { Field as FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName, Size } from "./utilities";

export interface SelectProps {
  field: FormField<string>;
  placeholder?: string;
  label: React.ReactNode;
  help?: React.ReactNode;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  children?: React.ReactNode;
  size?: Size;
  inline?: boolean;
  innerRef?: React.Ref<HTMLSelectElement>;
}

export function Select(props: SelectProps) {
  const { field, innerRef, placeholder, children } = props;
  const { id, value, setValue } = field;

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <Field {...props}>
      <select
        id={id}
        ref={innerRef}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={getClassName(props, "field__input")}
        aria-labelledby={getLabelledBy(field)}
      >
        {placeholder && (
          <option disabled value="" key="placeholder">
            {placeholder}
          </option>
        )}

        {children}
      </select>
    </Field>
  );
}

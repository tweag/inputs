import * as React from "react";
import { Field, FieldProps } from "./Field";
import { FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName, Size } from "./utilities";

export interface SelectProps extends FieldProps {
  field: FormField<string>;
  placeholder?: string;
  children?: React.ReactNode;
  size?: Size;
  inline?: boolean;
  innerRef?: React.Ref<HTMLSelectElement>;
  inputClassName?: string;
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
    <Field variant="select" {...props}>
      <select
        id={id}
        ref={innerRef}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        aria-labelledby={getLabelledBy(field)}
        className={getClassName(
          props,
          "field__input",
          "field__input--select",
          props.inputClassName
        )}
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

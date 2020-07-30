import * as React from "react";
import { Field } from "@stackup/form";
import { useBlur } from "./utilities";
import { getLabelledBy, getClassName, useFieldContext } from "./FieldContext";

type Attributes = React.SelectHTMLAttributes<HTMLSelectElement>;

export interface SelectProps extends Attributes {
  field: Field<string>;
  innerRef: React.Ref<HTMLSelectElement>;
  placeholder?: string;
}

export function Select(props: SelectProps) {
  const { field, innerRef, placeholder, children, ...moreProps } = props;
  const { id, value, setValue } = field;

  const context = useFieldContext();
  const labelledBy = getLabelledBy(field);
  const className = getClassName(context, "field__input", moreProps.className);

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <select
      {...moreProps}
      id={id}
      ref={innerRef}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      className={className}
      aria-labelledby={labelledBy}
    >
      {placeholder && (
        <option disabled value="" key="placeholder">
          {placeholder}
        </option>
      )}

      {children}
    </select>
  );
}

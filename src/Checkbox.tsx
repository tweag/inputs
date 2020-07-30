import * as React from "react";
import { Field } from "@stackup/form";
import { useBlur } from "./utilities";
import { getLabelledBy, getClassName, useFieldContext } from "./FieldContext";

type Attributes = React.InputHTMLAttributes<HTMLInputElement>;

export interface CheckboxProps extends Attributes {
  field: Field<boolean>;
  innerRef: React.Ref<HTMLInputElement>;
}

export function Checkbox(props: CheckboxProps) {
  const { field, innerRef, ...moreProps } = props;
  const { id, value, setValue } = field;

  const context = useFieldContext();
  const labelledBy = getLabelledBy(field);
  const className = getClassName(context, "field__input", moreProps.className);

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.checked);
    },
    [setValue]
  );

  return (
    <input
      {...moreProps}
      type="checkbox"
      id={id}
      ref={innerRef}
      checked={value}
      onBlur={onBlur}
      onChange={onChange}
      className={className}
      aria-labelledby={labelledBy}
    />
  );
}

import * as React from "react";
import { Field } from "@stackup/form";
import { useBlur } from "./utilities";
import { getLabelledBy, getClassName, useFieldContext } from "./FieldContext";

type Attributes = React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends Attributes {
  field: Field<string>;
  innerRef?: React.Ref<HTMLInputElement>;
}

export function Input(props: InputProps) {
  const { field, innerRef, ...moreProps } = props;
  const { id, value, setValue } = field;

  const context = useFieldContext();
  const labelledBy = getLabelledBy(field);
  const className = getClassName(context, "field__input", moreProps.className);

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <input
      type="text"
      {...moreProps}
      id={id}
      value={value}
      ref={innerRef}
      onBlur={onBlur}
      onChange={onChange}
      className={className}
      aria-labelledby={labelledBy}
    />
  );
}

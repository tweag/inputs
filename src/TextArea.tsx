import * as React from "react";
import { Field } from "@stackup/form";
import { useBlur } from "./utilities";
import { getLabelledBy, getClassName, useFieldContext } from "./FieldContext";

type Attributes = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface TextAreaProps extends Attributes {
  field: Field<string>;
  innerRef: React.Ref<HTMLTextAreaElement>;
}

export function TextArea(props: TextAreaProps) {
  const { field, innerRef, ...moreProps } = props;
  const { id, value, setValue } = field;

  const context = useFieldContext();
  const labelledBy = getLabelledBy(field);
  const className = getClassName(context, "field__input", moreProps.className);

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <textarea
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

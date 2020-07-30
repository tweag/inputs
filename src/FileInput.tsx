import * as React from "react";
import { Field } from "@stackup/form";
import { useBlur } from "./utilities";
import { getLabelledBy, getClassName, useFieldContext } from "./FieldContext";

type Attributes = React.InputHTMLAttributes<HTMLInputElement>;

export interface FileInputProps extends Attributes {
  field: Field<File | null>;
  innerRef?: React.Ref<HTMLInputElement>;
}

export function FileInput(props: FileInputProps) {
  const { field, innerRef, ...moreProps } = props;
  const { id, setValue } = field;

  const context = useFieldContext();
  const labelledBy = getLabelledBy(field);
  const className = getClassName(context, "field__input", moreProps.className);

  const onBlur = useBlur(props.field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files?.[0] || null);
    },
    [setValue]
  );

  return (
    <input
      {...moreProps}
      type="file"
      id={id}
      ref={innerRef}
      onBlur={onBlur}
      onChange={onChange}
      className={className}
      aria-labelledby={labelledBy}
    />
  );
}

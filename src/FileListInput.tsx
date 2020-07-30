import * as React from "react";
import { Field } from "@stackup/form";
import { useBlur } from "./utilities";
import { getLabelledBy, getClassName, useFieldContext } from "./FieldContext";

type Attributes = React.InputHTMLAttributes<HTMLInputElement>;

export interface FileListInputProps extends Attributes {
  field: Field<FileList | null>;
  innerRef?: React.Ref<HTMLInputElement>;
}

export function FileListInput(props: FileListInputProps) {
  const { field, innerRef, ...moreProps } = props;
  const { id, setValue } = field;

  const context = useFieldContext();
  const labelledBy = getLabelledBy(field);
  const className = getClassName(context, "field__input", moreProps.className);

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files || null);
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

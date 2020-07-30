import * as React from "react";
import { Field } from "./Field";
import { FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName } from "./utilities";
import { SharedFieldProps, FieldSize } from "./types";

export interface TextAreaProps extends SharedFieldProps {
  field: FormField<string>;
  size?: FieldSize;
  condensed?: boolean;
  innerRef?: React.Ref<HTMLTextAreaElement>;
  inputClassName?: string;
}

export function TextArea(props: TextAreaProps) {
  const { field, innerRef } = props;
  const { id, value, setValue } = field;

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <Field variant="textarea" {...props}>
      <textarea
        id={id}
        value={value}
        ref={innerRef}
        onBlur={onBlur}
        onChange={onChange}
        aria-labelledby={getLabelledBy(field)}
        className={getClassName(
          props,
          "field__input",
          "field__input--textarea",
          props.inputClassName
        )}
      />
    </Field>
  );
}

import * as React from "react";
import { Field } from "./Field";
import { Field as FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName, Size } from "./utilities";

export interface TextAreaProps {
  field: FormField<string>;
  label: React.ReactNode;
  help?: React.ReactNode;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  size?: Size;
  condensed?: boolean;
  innerRef?: React.Ref<HTMLTextAreaElement>;
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
        className={getClassName(
          props,
          "field__input",
          "field__input--textarea"
        )}
        aria-labelledby={getLabelledBy(field)}
      />
    </Field>
  );
}

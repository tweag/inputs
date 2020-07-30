import * as React from "react";
import { Field } from "./Field";
import { FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName } from "./utilities";
import { SharedFieldProps, FieldSize } from "./types";

export interface CheckboxProps extends SharedFieldProps {
  field: FormField<boolean>;
  size?: FieldSize;
  innerRef?: React.Ref<HTMLInputElement>;
  inputClassName?: string;
}

export function Checkbox(props: CheckboxProps) {
  const { field, innerRef } = props;
  const { id, value, setValue } = field;

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.checked);
    },
    [setValue]
  );

  return (
    <Field check variant="checkbox" {...props}>
      <input
        type="checkbox"
        id={id}
        ref={innerRef}
        checked={value}
        onBlur={onBlur}
        onChange={onChange}
        aria-labelledby={getLabelledBy(field)}
        className={getClassName(
          props,
          "field__input",
          "field__input--check",
          "field__input--checkbox",
          props.className
        )}
      />
    </Field>
  );
}

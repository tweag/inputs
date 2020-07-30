import * as React from "react";
import { Field } from "./Field";
import { Field as FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName, Size } from "./utilities";

export interface CheckboxProps {
  field: FormField<boolean>;
  label: React.ReactNode;
  help?: React.ReactNode;
  size?: Size;
  innerRef?: React.Ref<HTMLInputElement>;
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
    <Field check {...props}>
      <input
        type="checkbox"
        id={id}
        ref={innerRef}
        checked={value}
        onBlur={onBlur}
        onChange={onChange}
        className={getClassName(props, "field__input")}
        aria-labelledby={getLabelledBy(field)}
      />
    </Field>
  );
}

import * as React from "react";
import equals from "fast-deep-equal";
import { Field, FieldProps } from "./Field";
import { FormField } from "@stackup/form";
import {
  Size,
  getClassName,
  getDOMValue,
  getLabelledBy,
  useBlur,
  useNestedId
} from "./utilities";

export interface RadioProps<T> extends FieldProps {
  value: T;
  field: FormField<T | null>;
  size?: Size;
  inline?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
  inputClassName?: string;
}

export function Radio<T>(props: RadioProps<T>) {
  props = { ...props, field: useNestedId(props.field) };

  const { field, innerRef } = props;
  const { id, value, setValue } = field;

  const onBlur = useBlur(field);
  const onChange = React.useCallback(() => {
    setValue(props.value);
  }, [props.value, setValue]);

  return (
    <Field check variant="radio" {...props}>
      <input
        type="radio"
        id={id}
        ref={innerRef}
        checked={equals(value, props.value)}
        value={getDOMValue(props.value)}
        onBlur={onBlur}
        onChange={onChange}
        aria-labelledby={getLabelledBy(field)}
        className={getClassName(
          props,
          "field__input",
          "field__input--check",
          "field__input--radio",
          props.inputClassName
        )}
      />
    </Field>
  );
}

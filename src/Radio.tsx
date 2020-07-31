import * as React from "react";
import equals from "fast-deep-equal";
import { FieldProps } from "./types";
import { getDOMValue, useNestedId } from "./utilities";

export interface RadioProps<Value>
  extends FieldProps<Value | null, HTMLInputElement> {
  value: Value;
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

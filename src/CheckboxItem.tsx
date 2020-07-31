import * as React from "react";
import { FieldProps } from "./types";
import { contains, getDOMValue, remove, useNestedId } from "./utilities";

export interface CheckboxItemProps<Value>
  extends FieldProps<Value[], HTMLInputElement> {
  value: Value;
}

export function CheckboxItem<Value>(props: CheckboxItemProps<Value>) {
  props = { ...props, field: useNestedId(props.field) };

  const { field, innerRef } = props;
  const { id, value, setValue } = field;

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;

      setValue(value => {
        if (checked) {
          return [...value, props.value];
        } else {
          return remove(value, props.value);
        }
      });
    },
    [props.value, setValue]
  );

  return (
    <Field check variant="checkbox" {...props}>
      <input
        type="checkbox"
        id={id}
        ref={innerRef}
        checked={contains(value, props.value)}
        value={getDOMValue(props.value)}
        onBlur={onBlur}
        onChange={onChange}
        aria-labelledby={getLabelledBy(field)}
        className={getClassName(
          props,
          "field__input",
          "field__input--check",
          "field__input--checkbox",
          props.inputClassName
        )}
      />
    </Field>
  );
}

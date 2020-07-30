import * as React from "react";
import { Field } from "./Field";
import { FormField } from "@stackup/form";
import {
  Size,
  contains,
  getClassName,
  getDOMValue,
  getLabelledBy,
  remove,
  useBlur,
  useNestedId
} from "./utilities";

export interface CheckboxItemProps<T> {
  value: T;
  field: FormField<T[]>;
  label: React.ReactNode;
  help?: React.ReactNode;
  size?: Size;
  inline?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
}

export function CheckboxItem<T>(props: CheckboxItemProps<T>) {
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
          "field__input--checkbox"
        )}
      />
    </Field>
  );
}

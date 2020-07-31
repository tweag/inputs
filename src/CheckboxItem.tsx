import * as React from "react";
import { FieldProps } from "./types";
import { contains, getDOMValue, remove, useNestedId } from "./utilities";
import { useFieldProps } from "./useFieldProps";

export interface CheckboxItemProps<Value>
  extends FieldProps<Value[], HTMLInputElement> {
  value: Value;
}

export function CheckboxItem<Value>(props: CheckboxItemProps<Value>) {
  const {
    field,
    label,
    help,
    error,
    append,
    prepend,
    value: item,
    getFieldProps,
    getLabelProps,
    getErrorProps,
    getHelpProps,
    ...inputProps
  } = useFieldProps(
    { ...props, field: useNestedId(props.field) },
    "check",
    "checkbox"
  );

  const { value, setValue } = field;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;

      setValue(value => {
        if (checked) {
          return [...value, item];
        } else {
          return remove(value, item);
        }
      });
    },
    [item, setValue]
  );

  return (
    <Field check variant="checkbox" {...props}>
      <input
        type="checkbox"
        checked={contains(value, item)}
        value={getDOMValue(item)}
        onChange={onChange}
      />
    </Field>
  );
}

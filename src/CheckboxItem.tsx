import * as React from "react";
import { useField } from "./useField";
import { contains, remove } from "./utilities";
import { CheckboxItemProps, Element, GetProps } from "./types";

export function createCheckboxItem<E>(
  getProps: GetProps<CheckboxItemProps<unknown>, E>
) {
  return function CheckboxItem<T>(props: CheckboxItemProps<T> & E): Element {
    const { represents, ...fieldProps } = getProps(props);
    const field = useField(fieldProps);

    const checked = React.useMemo(() => contains(field.value, represents), [
      represents,
      field.value
    ]);

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
          field.onChange(field.value.concat([represents]));
        } else {
          field.onChange(remove(field.value, represents));
        }
      },
      [represents, field.value, field.onChange]
    );

    return (
      <div {...field.getContainerProps()}>
        <input
          {...field.getInputProps()}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />

        {field.label && (
          <label {...field.getLabelProps()}>
            {field.label}
            {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
          </label>
        )}

        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const CheckboxItem = createCheckboxItem(props => props);

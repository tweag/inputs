import * as React from "react";
import { useField } from "./useField";
import { CheckboxItemProps, Element } from "./types";
import { contains, remove } from "./utilities";

export function CheckboxItem<T>({
  represents,
  ...props
}: CheckboxItemProps<T>): Element {
  const field = useField(props);

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
}

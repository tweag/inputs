import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { contains, remove } from "./utilities";
import { CheckboxItemProps, Element, Theme } from "./types";

export function createCheckboxItem<ThemeProps>(
  theme: Theme<ThemeProps, CheckboxItemProps<unknown>>
) {
  return function CheckboxItem<Value>(
    props: CheckboxItemProps<Value> & ThemeProps
  ): Element {
    const { represents, ...fieldProps } = applyTheme(props, theme);
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

export const CheckboxItem = createCheckboxItem({});

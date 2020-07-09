import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { contains, remove } from "./utilities";
import { CheckboxItemProps, Element, Theme } from "./types";

export function createCheckboxItem<ThemeProps>(
  theme: Theme<ThemeProps, CheckboxItemProps<any>>
) {
  return function CheckboxItem<Value>(
    props: CheckboxItemProps<Value> & ThemeProps
  ): Element {
    const { represents, ...fieldConfig } = applyTheme(props, theme);
    const field = useField(fieldConfig);

    const { value, onChange } = field;
    const checked = React.useMemo(() => value && contains(value, represents), [
      represents,
      value
    ]);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!value || !onChange) {
          return;
        }

        const nextValue = event.target.checked
          ? value.concat([represents])
          : remove(value, represents);

        onChange(nextValue);
      },
      [represents, value, onChange]
    );

    return (
      <div {...field.getFieldProps()}>
        <input
          {...field.getInputProps()}
          type="checkbox"
          value={typeof represents === "string" ? represents : undefined}
          checked={checked}
          onChange={handleChange}
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

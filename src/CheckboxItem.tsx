import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { contains, remove, isUndefined } from "./utilities";
import { Element, Theme, HTMLField } from "./types";

export interface CheckboxItemProps<Value> extends HTMLField<HTMLInputElement> {
  value?: Value[];
  onChangeValue?: (value: Value[]) => void;
  represents: Value;
}

export function createCheckboxItem<ThemeProps>(
  theme: Theme<ThemeProps, CheckboxItemProps<any>>
) {
  return function CheckboxItem<Value>(
    props: CheckboxItemProps<Value> & ThemeProps
  ): Element {
    const {
      value,
      onChange,
      onChangeValue,
      represents,
      ...otherProps
    } = applyTheme(props, theme);

    const field = useField(otherProps);
    const checked = isUndefined(value)
      ? undefined
      : contains(value, represents);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event);
        }

        if (value && onChangeValue) {
          if (event.target.checked) {
            onChangeValue(value.concat([represents]));
          } else {
            onChangeValue(remove(value, represents));
          }
        }
      },
      [represents, value, onChange, onChangeValue]
    );

    return (
      <div {...field.getFieldProps()}>
        <input
          type="checkbox"
          value={typeof represents === "string" ? represents : undefined}
          checked={checked}
          onChange={handleChange}
          {...field.getInputProps()}
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

import * as React from "react";
import isEqual from "fast-deep-equal";
import { useGroup } from "./useGroup";
import { applyTheme, Theme } from "./theme";
import { useField, FieldProps } from "./useField";
import { isUndefined, contains, remove, HTMLProps } from "./utilities";

export interface ItemProps extends FieldProps, HTMLProps<HTMLInputElement> {
  value: any;
}

export function createItem<ThemeProps>(theme: Theme<ThemeProps, ItemProps>) {
  return function Item(props: ItemProps & ThemeProps) {
    const { type, value, onChangeValue, ...groupProps } = useGroup();
    const { value: itemValue, onChange, ...otherProps } = applyTheme(
      { type, ...props, ...groupProps },
      theme
    );

    const field = useField(otherProps);
    const isDOMValue = ["string", "number"].includes(typeof itemValue);
    const checked = isUndefined(value)
      ? undefined
      : type === "checkbox"
      ? contains(value, itemValue)
      : isEqual(value, itemValue);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event);
        }

        if (onChangeValue && typeof value !== "undefined") {
          if (type === "checkbox") {
            if (event.target.checked) {
              onChangeValue([...value, itemValue]);
            } else {
              onChangeValue(remove(value, itemValue));
            }
          } else {
            onChangeValue(itemValue);
          }
        }
      },
      [type, value, itemValue, onChange, onChangeValue]
    );

    return (
      <div {...field.getFieldProps()}>
        <input
          type={type}
          value={isDOMValue ? itemValue : undefined}
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

export const Item = createItem({});

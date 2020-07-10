import * as React from "react";
import isEqual from "fast-deep-equal";
import { useField } from "./useField";
import { useGroup } from "./useGroup";
import { applyTheme } from "./applyTheme";
import { Element, Theme, HTMLField } from "./types";
import { isUndefined, contains, remove } from "./utilities";

export interface ItemProps extends HTMLField<HTMLInputElement> {
  value: any;
}

export function createItem<ThemeProps>(theme: Theme<ThemeProps, ItemProps>) {
  return function Item(props: ItemProps & ThemeProps): Element {
    const { type, value, onChangeValue, ...groupProps } = useGroup();
    const { value: itemValue, onChange, ...otherProps } = applyTheme(
      { type, ...props, ...groupProps },
      theme
    );

    const field = useField(otherProps);
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
          value={typeof itemValue === "string" ? itemValue : undefined}
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

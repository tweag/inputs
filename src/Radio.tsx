import * as React from "react";
import isEqual from "fast-deep-equal";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { RadioProps, Element, Theme } from "./types";
import { isUndefined } from "./utilities";

export function createRadio<ThemeProps>(
  theme: Theme<ThemeProps, RadioProps<any>>
) {
  return function Radio<Value>(props: RadioProps<Value> & ThemeProps): Element {
    const {
      value,
      onChange,
      onChangeValue,
      represents,
      ...otherProps
    } = applyTheme(props, theme);

    const field = useField(otherProps);
    const checked = isUndefined(value) ? undefined : isEqual(value, represents);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        onChangeValue && onChangeValue(represents);
      },
      [represents, onChange, onChangeValue]
    );

    return (
      <div {...field.getFieldProps()}>
        <input
          type="radio"
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

export const Radio = createRadio({});

import * as React from "react";
import isEqual from "fast-deep-equal";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { RadioProps, Element, Theme } from "./types";

export function createRadio<ThemeProps>(
  theme: Theme<ThemeProps, RadioProps<any>>
) {
  return function Radio<Value>(props: RadioProps<Value> & ThemeProps): Element {
    const { value, onChange, represents, ...otherProps } = applyTheme(
      props,
      theme
    );

    const field = useField(otherProps);
    const checked = React.useMemo(() => isEqual(value, represents), [
      represents,
      value
    ]);

    const handleChange = React.useCallback(
      () => onChange && onChange(represents),
      [represents, onChange]
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

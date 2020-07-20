import * as React from "react";
import { FieldProps, useField } from "./useField";
import { useConfig, Config } from "./useConfig";
import { FieldSetProps, useFieldSet } from "./useFieldSet";
import {
  HTMLProps,
  contains,
  createGroupContext,
  getDOMValue,
  isUndefined,
  toggle
} from "./utilities";

export interface CheckboxGroupProps<V> extends FieldSetProps {
  name: string;
  value?: V[];
  children?: React.ReactNode;
  onChangeValue?: (value: V[]) => void;
}

export interface CheckboxGroupItemProps
  extends FieldProps,
    HTMLProps<HTMLInputElement> {
  value: any;
}

export function createCheckboxGroup<T>(
  config: Config<CheckboxGroupProps<any>, T>
) {
  const { Provider, useGroup } = createGroupContext("CheckboxGroup");

  function CheckboxGroup(props: CheckboxGroupProps<any> & T) {
    const { children, ...otherProps } = useConfig(config, props);
    const field = useFieldSet(otherProps);

    return (
      <fieldset {...field.getFieldSetProps()}>
        {field.legend && (
          <legend {...field.getLegendProps()}>{field.legend}</legend>
        )}

        {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
        <Provider value={field.getFieldProps()}>{children}</Provider>
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </fieldset>
    );
  }

  function Item(props: CheckboxGroupItemProps) {
    const { value: selected, onChangeValue, ...groupProps } = useGroup();
    const { value, onChange, ...otherProps } = { ...groupProps, ...props };
    const field = useField(otherProps);
    const checked = isUndefined(selected)
      ? undefined
      : contains(selected, value);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        onChangeValue && onChangeValue(toggle(selected, value));
      },
      [value, selected, onChange, onChangeValue]
    );

    return (
      <div {...field.getFieldProps()}>
        <input
          type="checkbox"
          checked={checked}
          value={getDOMValue(value)}
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
  }

  return Object.assign(CheckboxGroup, { Item });
}

export const CheckboxGroup = createCheckboxGroup({});

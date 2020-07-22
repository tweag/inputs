import * as React from "react";
import equals from "fast-deep-equal";
import { FieldProps, useField } from "./useField";
import { useConfig, Config } from "./useConfig";
import { FieldSetProps, useFieldSet } from "./useFieldSet";
import {
  HTMLProps,
  createGroupContext,
  getDOMValue,
  isUndefined
} from "./utilities";

export interface RadioGroupProps<V> extends FieldSetProps {
  name: string;
  value?: V;
  children?: React.ReactNode;
  onChangeValue?: (value: V) => void;
}

export interface RadioGroupOptionProps
  extends FieldProps,
    HTMLProps<HTMLInputElement> {
  value: any;
}

export function createRadioGroup<T>(config: Config<RadioGroupProps<any>, T>) {
  const { Provider, useGroup } = createGroupContext("RadioGroup");

  function RadioGroup(props: RadioGroupProps<any> & T) {
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

  function Option(props: RadioGroupOptionProps) {
    const { value: selected, onChangeValue, ...groupProps } = useGroup();
    const { value, onChange, ...otherProps } = { ...groupProps, ...props };
    const field = useField(otherProps);
    const checked = isUndefined(selected) ? undefined : equals(selected, value);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        onChangeValue && onChangeValue(value);
      },
      [value, onChange, onChangeValue]
    );

    return (
      <div {...field.getFieldProps()}>
        <input
          type="radio"
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

  return Object.assign(RadioGroup, { Option });
}

export const RadioGroup = createRadioGroup({});

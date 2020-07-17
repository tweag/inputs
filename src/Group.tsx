import * as React from "react";
import { useConfig, Config } from "./useConfig";
import { GroupProvider } from "./useGroupContext";
import { FieldSetProps, useFieldSet } from "./useFieldSet";

export interface GroupProps extends FieldSetProps {
  value?: any;
  children?: React.ReactNode;
  onChangeValue?: (value: any) => void;
}

export function createGroup<T>(config: Config<GroupProps, T>) {
  return function Group(props: GroupProps & T) {
    const { children, ...otherProps } = useConfig(config, props);
    const field = useFieldSet(otherProps);

    return (
      <fieldset {...field.getFieldSetProps()}>
        {field.legend && (
          <legend {...field.getLegendProps()}>{field.legend}</legend>
        )}

        {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
        <GroupProvider value={field.getFieldProps()}>{children}</GroupProvider>
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </fieldset>
    );
  };
}

export const Group = createGroup({});

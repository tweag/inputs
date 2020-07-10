import * as React from "react";
import { applyTheme, Theme } from "./theme";
import { GroupProvider, GroupContext } from "./useGroup";
import { FieldSetProps, useFieldSet } from "./useFieldSet";

export interface GroupProps<T = any> extends GroupContext<T>, FieldSetProps {
  children?: React.ReactNode;
}

export function createGroup<ThemeProps>(
  theme: Theme<ThemeProps, GroupProps<any>>
) {
  return function Group<T>(props: GroupProps<T> & ThemeProps) {
    const { children, ...otherProps } = applyTheme(props, theme, false);
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

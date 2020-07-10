import * as React from "react";
import { useTheme, Theme } from "./useTheme";
import { GroupProvider, GroupContext } from "./useGroup";
import { FieldSetProps, useFieldSet } from "./useFieldSet";

export interface GroupProps<T = any> extends GroupContext<T>, FieldSetProps {
  children?: React.ReactNode;
}

export function createGroup<ThemeProps>(
  theme: Theme<ThemeProps, GroupProps<any>>
) {
  return function Group<T>(props: GroupProps<T> & ThemeProps) {
    const { children, ...otherProps } = useTheme(props, theme, false);
    const field = useFieldSet(otherProps);

    /**
     * It's important that we at least pass the error down
     * to the field. Otherwise, theming becomes more challenging
     * for the `Item`.
     */
    const fieldProps = { error: props.error, ...field.getFieldProps() };

    return (
      <fieldset {...field.getFieldSetProps()}>
        {field.legend && (
          <legend {...field.getLegendProps()}>{field.legend}</legend>
        )}

        {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
        <GroupProvider value={fieldProps}>{children}</GroupProvider>
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </fieldset>
    );
  };
}

export const Group = createGroup({});

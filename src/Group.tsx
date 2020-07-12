import * as React from "react";
import { customize } from "./customize";
import { GroupProvider, GroupContext } from "./useGroup";
import { FieldSetProps, useFieldSet } from "./useFieldSet";

export interface GroupProps extends GroupContext, FieldSetProps {
  children?: React.ReactNode;
}

export function Group(props: GroupProps) {
  const { children, ...otherProps } = props;
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
}

export const createGroup = customize(Group);

import * as React from "react";
import { customize } from "./customize";
import { GroupProvider } from "./useGroupContext";
import { FieldSetProps, useFieldSet } from "./useFieldSet";

export interface GroupProps extends FieldSetProps {
  value?: any;
  children?: React.ReactNode;
  onChangeValue?: (value: any) => void;
}

export function Group(props: GroupProps) {
  const { children, ...otherProps } = props;
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
}

export const createGroup = customize(Group);

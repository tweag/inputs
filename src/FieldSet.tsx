import * as React from "react";
import { FieldSetProps } from "./types";
import { defaultTheme } from "./theme";

export const FieldSet: React.FC<FieldSetProps> = ({
  name,
  children,
  theme = defaultTheme
}) => {
  const fieldSetClassName = theme.fieldSet;
  const fieldSetBodyClassName = theme.fieldSetBody;
  const legendClassName = theme.legend;

  return (
    <fieldset className={fieldSetClassName}>
      <legend className={legendClassName}>{name}</legend>
      <div className={fieldSetBodyClassName}>{children}</div>
    </fieldset>
  );
};

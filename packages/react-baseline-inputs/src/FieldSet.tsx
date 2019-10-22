import * as React from "react";
import { FieldSetProps } from "./types";
import { defaultTheme } from "./theme";

export const FieldSet: React.FC<FieldSetProps> = ({
  name,
  children,
  theme = defaultTheme
}) => {
  const fieldSetClassName = theme.fieldSet;
  const legendClassName = theme.legend;

  return (
    <fieldset className={fieldSetClassName}>
      <legend className={legendClassName}>{name}</legend>
      {children}
    </fieldset>
  );
};

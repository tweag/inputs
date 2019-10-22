import * as React from "react";
import { FieldSetProps } from "./types";
import { defaultTheme } from "./theme";

export const FieldSet: React.FC<FieldSetProps> = ({
  name,
  inline,
  children,
  theme = defaultTheme
}) => {
  const fieldSetClassNames = [theme.fieldSet];
  const fieldSetBodyClassName = theme.fieldSetBody;
  const legendClassName = theme.legend;

  if (inline) {
    fieldSetClassNames.push(theme.fieldSetInline);
  }

  const fieldSetClassName = fieldSetClassNames.join(" ").trim();

  return (
    <fieldset className={fieldSetClassName}>
      <legend className={legendClassName}>{name}</legend>
      <div className={fieldSetBodyClassName}>{children}</div>
    </fieldset>
  );
};

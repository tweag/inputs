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

  if (inline) {
    fieldSetClassNames.push(theme.fieldSetInline);
  }

  const fieldSetClassName = fieldSetClassNames.join(" ").trim();

  return (
    <fieldset className={fieldSetClassName}>
      <legend className={theme.legend}>{name}</legend>
      <div className={theme.fieldSetBody}>{children}</div>
    </fieldset>
  );
};

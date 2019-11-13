import * as React from "react";
import { FieldSetProps, FieldSetTheme } from "./types";
import { useTheme } from "./theme";
import { generateUniqueId, join } from "./utils";

export const FieldSet: React.FC<FieldSetProps> = ({
  title,
  id = React.useMemo(generateUniqueId, []),
  help,
  children,
  className,
  theme = useTheme("fieldSet"),
  error,
  large,
  small
}) => {
  const fieldSetTheme = theme as FieldSetTheme;
  const fieldSetClassNames = [fieldSetTheme.fieldSet];
  const legendClassNames = [fieldSetTheme.legend];
  const helpClassNames = [fieldSetTheme.help];
  const errorClassNames = [fieldSetTheme.error];

  if (className) {
    fieldSetClassNames.push(className);
  }

  if (error) {
    fieldSetClassNames.push(fieldSetTheme.fieldSetError);
    legendClassNames.push(fieldSetTheme.legendError);
  }

  if (large) {
    fieldSetClassNames.push(fieldSetTheme.fieldSetLarge);
    legendClassNames.push(fieldSetTheme.legendLarge);
    errorClassNames.push(fieldSetTheme.errorLarge);
    helpClassNames.push(fieldSetTheme.helpLarge);
  }

  if (small) {
    fieldSetClassNames.push(fieldSetTheme.fieldSetSmall);
    legendClassNames.push(fieldSetTheme.legendSmall);
    errorClassNames.push(fieldSetTheme.errorSmall);
    helpClassNames.push(fieldSetTheme.helpSmall);
  }

  const errorLabelId = `${id}_error`;

  return (
    <fieldset
      id={id}
      aria-describedby={error ? errorLabelId : undefined}
      className={join(fieldSetClassNames)}
    >
      <legend className={join(legendClassNames)}>{title}</legend>

      {help && <p className={join(helpClassNames)}>{help}</p>}

      {children}

      {error && (
        <span role="alert" className={join(errorClassNames)} id={errorLabelId}>
          {error}
        </span>
      )}
    </fieldset>
  );
};

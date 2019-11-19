import * as React from "react";
import { FieldSetProps, FieldSetTheme } from "./types";
import { useTheme } from "./theme";
import { generateUniqueId, join } from "./utils";

export const FieldSet: React.FC<FieldSetProps> = ({
  legend,
  id = React.useMemo(generateUniqueId, []),
  help,
  children,
  className,
  theme = useTheme("fieldSet"),
  touched,
  error,
  success = touched && !error,
  large,
  small,
  wrapper = true
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

  if (success) {
    fieldSetClassNames.push(fieldSetTheme.fieldSetSuccess);
    legendClassNames.push(fieldSetTheme.legendSuccess);
  }

  if (touched) {
    fieldSetClassNames.push(fieldSetTheme.fieldSetTouched);
    legendClassNames.push(fieldSetTheme.legendTouched);
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

  return wrapper ? (
    <fieldset
      id={id}
      aria-describedby={error ? errorLabelId : undefined}
      className={join(fieldSetClassNames)}
    >
      {legend && <legend className={join(legendClassNames)}>{legend}</legend>}

      {help && <p className={join(helpClassNames)}>{help}</p>}

      {children}

      {error && (
        <span role="alert" className={join(errorClassNames)} id={errorLabelId}>
          {error}
        </span>
      )}
    </fieldset>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

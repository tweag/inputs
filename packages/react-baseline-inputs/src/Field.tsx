import * as React from "react";
import { FieldProps } from "./types";
import { useTheme } from "./theme";

const generateUniqueId = (() => {
  let previousId = 0;
  return () => {
    const id = ++previousId;
    return `field_${id}`;
  };
})();

// This is ugly, but performance is important here.
const join = (names: Array<string | undefined>) => {
  let name = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i]) {
      name += name ? ` ${names[i]}` : names[i];
    }
  }
  return name;
};

export function Field<T extends FieldProps>({
  label,
  labelPosition = "before",
  render,
  id = React.useMemo(generateUniqueId, []),
  help,
  inline,
  touched,
  error,
  success = touched && !error,
  large,
  small,
  wrapper = true,
  theme = useTheme("field"),
  disabled,
  className,
  ...props
}: T) {
  const fieldClassNames = [theme.field];
  const inputClassNames = [theme.input];
  const labelClassNames = [theme.label];
  const errorClassNames = [theme.error];
  const helpClassNames = [theme.help];

  if (className) {
    fieldClassNames.push(className);
  }

  if (inline) {
    fieldClassNames.push(theme.fieldInline);
    inputClassNames.push(theme.inputInline);
    labelClassNames.push(theme.labelInline);
    errorClassNames.push(theme.errorInline);
    helpClassNames.push(theme.helpInline);
  }

  if (touched) {
    fieldClassNames.push(theme.fieldTouched);
    inputClassNames.push(theme.inputTouched);
    labelClassNames.push(theme.labelTouched);
  }

  if (error) {
    fieldClassNames.push(theme.fieldError);
    inputClassNames.push(theme.inputError);
    labelClassNames.push(theme.labelError);
  }

  if (success) {
    fieldClassNames.push(theme.fieldSuccess);
    inputClassNames.push(theme.inputSuccess);
    labelClassNames.push(theme.labelSuccess);
  }

  if (large) {
    fieldClassNames.push(theme.fieldLarge);
    inputClassNames.push(theme.inputLarge);
    labelClassNames.push(theme.labelLarge);
    errorClassNames.push(theme.errorLarge);
    helpClassNames.push(theme.helpLarge);
  }

  if (small) {
    fieldClassNames.push(theme.fieldSmall);
    inputClassNames.push(theme.inputSmall);
    labelClassNames.push(theme.labelSmall);
    errorClassNames.push(theme.errorSmall);
    helpClassNames.push(theme.helpSmall);
  }

  if (disabled) {
    fieldClassNames.push(theme.fieldDisabled);
    inputClassNames.push(theme.inputDisabled);
    labelClassNames.push(theme.labelDisabled);
  }

  const labelId = `${id}_label`;
  const errorLabelId = `${id}_error`;

  const [Wrapper, wrapperProps] = wrapper
    ? ["div", { className: join(fieldClassNames) }]
    : [React.Fragment, {}];

  const inputProps = {
    id,
    disabled,
    className: join(inputClassNames),
    "aria-labelledby": error ? `${labelId} ${errorLabelId}` : undefined,
    ...props
  };

  return (
    <Wrapper {...wrapperProps}>
      {labelPosition === "after" && render(inputProps)}

      {label && (
        <label
          className={join(labelClassNames)}
          htmlFor={id}
          id={error ? labelId : undefined}
        >
          {label}
          {help && <span className={join(helpClassNames)}>{help}</span>}
        </label>
      )}

      {labelPosition === "before" && render(inputProps)}

      {error && (
        <span role="alert" className={join(errorClassNames)} id={errorLabelId}>
          {error}
        </span>
      )}
    </Wrapper>
  );
}

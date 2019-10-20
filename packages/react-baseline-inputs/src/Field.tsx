import * as React from "react";
import { FieldProps } from "./types";
import { defaultTheme } from "./theme";

const generateUniqueId = (() => {
  let previousId = 0;
  return () => {
    const id = ++previousId;
    return `field_${id}`;
  };
})();

export function Field<T extends FieldProps>({
  label,
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
  theme = defaultTheme,
  ...props
}: T) {
  const fieldClassNames = [theme.field];
  const inputClassNames = [theme.input];
  const labelClassNames = [theme.label];

  if (inline) {
    fieldClassNames.push(theme.fieldInline);
    inputClassNames.push(theme.inputInline);
    labelClassNames.push(theme.labelInline);
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
  }

  if (small) {
    fieldClassNames.push(theme.fieldSmall);
    inputClassNames.push(theme.inputSmall);
    labelClassNames.push(theme.labelSmall);
  }

  const fieldClassName = fieldClassNames.join(" ").trim();
  const inputClassName = inputClassNames.join(" ").trim();
  const labelClassName = labelClassNames.join(" ").trim();

  const [Wrapper, wrapperProps] = wrapper
    ? ["div", { className: fieldClassName }]
    : [React.Fragment, {}];

  const inputProps = {
    id,
    className: inputClassName,
    ...props
  };

  return (
    <Wrapper {...wrapperProps}>
      {inline && render(inputProps)}

      {label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
          {help && <span className={theme.help}>{help}</span>}
        </label>
      )}

      {!inline && render(inputProps)}

      {error && (
        <span role="alert" className={theme.error}>
          {error}
        </span>
      )}
    </Wrapper>
  );
}

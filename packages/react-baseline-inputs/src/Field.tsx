import * as React from "react";
import { FieldProps } from "./types";
import { defaultTheme } from "./defaultTheme";

const generateUniqueId = (() => {
  let previousId = 0;
  return () => {
    const id = ++previousId;
    return `field_${id}`;
  };
})();

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
  theme = defaultTheme,
  disabled,
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

  if (disabled) {
    fieldClassNames.push(theme.fieldDisabled);
    inputClassNames.push(theme.inputDisabled);
    labelClassNames.push(theme.labelDisabled);
  }

  const fieldClassName = fieldClassNames.join(" ").trim();
  const inputClassName = inputClassNames.join(" ").trim();
  const labelClassName = labelClassNames.join(" ").trim();
  const errorLabelId = `${id}_error`;
  const labelId = `${id}_label`;

  const [Wrapper, wrapperProps] = wrapper
    ? ["div", { className: fieldClassName }]
    : [React.Fragment, {}];

  const inputProps = {
    id,
    disabled,
    className: inputClassName,
    "aria-labelledby": error ? `${labelId} ${errorLabelId}` : undefined,
    ...props
  };

  return (
    <Wrapper {...wrapperProps}>
      {labelPosition === "after" && render(inputProps)}

      {label && (
        <label
          className={labelClassName}
          htmlFor={id}
          id={error ? labelId : undefined}
        >
          {label}
          {help && <span className={theme.help}>{help}</span>}
        </label>
      )}

      {labelPosition === "before" && render(inputProps)}

      {error && (
        <span role="alert" className={theme.error} id={errorLabelId}>
          {error}
        </span>
      )}
    </Wrapper>
  );
}

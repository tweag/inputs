import * as React from "react";
import { FieldProps } from "./types";
import { useTheme } from "./theme";
import { join, useUniqueId } from "./utils";

export function Field<T extends FieldProps>({
  label,
  labelPosition = "before",
  render,
  id: _id,
  help,
  inline,
  condensed,
  touched,
  populated,
  error,
  success = touched && !error,
  large,
  small,
  wrapper = true,
  theme: _theme,
  disabled,
  className,
  renderIcon,
  renderIconBefore,
  ...props
}: T) {
  const id = useUniqueId(_id);

  const theme = useTheme("field", _theme);
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

  if (condensed) {
    fieldClassNames.push(theme.fieldCondensed);
    inputClassNames.push(theme.inputCondensed);
    labelClassNames.push(theme.labelCondensed);
    errorClassNames.push(theme.errorCondensed);
    helpClassNames.push(theme.helpCondensed);
  }

  if (touched) {
    fieldClassNames.push(theme.fieldTouched);
    inputClassNames.push(theme.inputTouched);
    labelClassNames.push(theme.labelTouched);
  }

  if (populated) {
    fieldClassNames.push(theme.fieldPopulated);
    inputClassNames.push(theme.inputPopulated);
    labelClassNames.push(theme.labelPopulated);
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

  if (renderIcon) {
    fieldClassNames.push(theme.fieldHasIcon);
    inputClassNames.push(theme.inputHasIcon);
    labelClassNames.push(theme.labelHasIcon);
  }

  if (renderIconBefore) {
    fieldClassNames.push(theme.fieldHasIconBefore);
    inputClassNames.push(theme.inputHasIconBefore);
    labelClassNames.push(theme.labelHasIconBefore);
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

  const renderInput = () => (
    <React.Fragment>
      {renderIconBefore && <div className={join([theme.icon, theme.iconBefore])} role="presentation">{renderIconBefore()}</div>}
      {renderIcon && <div className={theme.icon} role="presentation">{renderIcon()}</div>}
      {render(inputProps)}
    </React.Fragment>
  )

  return (
    <Wrapper {...wrapperProps}>
      {labelPosition === "after" && renderInput()}

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

      {labelPosition === "before" && renderInput()}

      {error && (
        <span role="alert" className={join(errorClassNames)} id={errorLabelId}>
          {error}
        </span>
      )}
    </Wrapper>
  );
}

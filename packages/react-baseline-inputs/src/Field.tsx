import * as React from "react";
import { FieldProps } from "./types";

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

  fieldClassName = "field",
  fieldInlineClassName = "field--inline",
  fieldInvalidClassName = "field--erroneous",
  fieldTouchedClassName = "field--touched",
  fieldValidClassName = "field--success",
  fieldLargeClassName = "field--large",
  fieldSmallClassName = "field--small",

  inputClassName = "field__input",
  inputInlineClassName = "field__input--inline",
  inputInvalidClassName = "field__input--erroneous",
  inputTouchedClassName = "field__input--touched",
  inputValidClassName = "field__input--success",
  inputLargeClassName = "field__input--large",
  inputSmallClassName = "field__input--small",

  labelClassName = "field__label",
  labelInlineClassName = "field__label--inline",
  labelLargeClassName = "field__label--large",
  labelSmallClassName = "field__label--small",

  helpClassName = "field__help",
  errorClassName = "message message--problem",

  ...props
}: T) {
  const fieldClassNames = [fieldClassName];
  const inputClassNames = [inputClassName];
  const labelClassNames = [labelClassName];

  if (inline) {
    fieldClassNames.push(fieldInlineClassName);
    inputClassNames.push(inputInlineClassName);
    labelClassNames.push(labelInlineClassName);
  }

  if (touched) {
    fieldClassNames.push(fieldTouchedClassName);
    inputClassNames.push(inputTouchedClassName);
  }

  if (error) {
    fieldClassNames.push(fieldInvalidClassName);
    inputClassNames.push(inputInvalidClassName);
  }

  if (success) {
    fieldClassNames.push(fieldValidClassName);
    inputClassNames.push(inputValidClassName);
  }

  if (large) {
    fieldClassNames.push(fieldLargeClassName);
    inputClassNames.push(inputLargeClassName);
    labelClassNames.push(labelLargeClassName);
  }

  if (small) {
    fieldClassNames.push(fieldSmallClassName);
    inputClassNames.push(inputSmallClassName);
    labelClassNames.push(labelSmallClassName);
  }

  const [Wrapper, wrapperProps] = wrapper
    ? ["div", { className: fieldClassNames.join(" ") }]
    : [React.Fragment, {}];

  const inputProps = {
    id,
    className: inputClassNames.join(" "),
    ...props
  };

  return (
    <Wrapper {...wrapperProps}>
      {inline && render(inputProps)}

      {label && (
        <label className={labelClassNames.join(" ")} htmlFor={id}>
          {label}
          {help && <span className={helpClassName}>{help}</span>}
        </label>
      )}

      {!inline && render(inputProps)}

      {error && (
        <span role="alert" className={errorClassName}>
          {error}
        </span>
      )}
    </Wrapper>
  );
}

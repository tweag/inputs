import * as React from "react";

export interface FieldProps {
  label?: React.ReactNode;
  render: (props: object) => React.ReactNode;

  wrap?: boolean;

  id?: string;
  inline?: boolean;
  large?: boolean;
  small?: boolean;
  touched?: boolean;
  success?: boolean;
  error?: React.ReactNode;
  help?: React.ReactNode;

  fieldClassName?: string;
  fieldInlineClassName?: string;
  fieldValidClassName?: string;
  fieldInvalidClassName?: string;
  fieldTouchedClassName?: string;
  fieldLargeClassName?: string;
  fieldSmallClassName?: string;

  inputClassName?: string;
  inputValidClassName?: string;
  inputInvalidClassName?: string;
  inputTouchedClassName?: string;
  inputInlineClassName?: string;
  inputLargeClassName?: string;
  inputSmallClassName?: string;

  labelClassName?: string;
  labelInlineClassName?: string;
  labelLargeClassName?: string;
  labelSmallClassName?: string;

  helpClassName?: string;
  errorClassName?: string;
}

const generateUniqueId = (() => {
  let previousId = 0;
  return () => {
    const id = ++previousId;
    return `field_${id}`;
  };
})();

export const Field: React.FC<FieldProps> = ({
  label = false,
  render,
  id = React.useMemo(() => generateUniqueId(), []),
  wrap = true,

  help,
  inline,
  touched,
  error,
  success = touched && !error,
  large,
  small,

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
}) => {
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

  const inputProps = {
    id,
    className: inputClassNames.join(" "),
    ...props
  };

  const Element = wrap ? "div" : React.Fragment;

  return (
    <Element className={fieldClassNames.join(" ")}>
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
    </Element>
  );
};

import * as React from "react";

export interface FieldProps {
  name: string;
  label: React.ReactNode;
  render: (props: object) => React.ReactNode;

  id?: string;
  inline?: boolean;
  touched?: boolean;
  success?: boolean;
  error?: React.ReactNode;
  help?: React.ReactNode;

  fieldClassName?: string;
  fieldInlineClassName?: string;
  fieldValidClassName?: string;
  fieldInvalidClassName?: string;
  fieldTouchedClassName?: string;

  inputClassName?: string;
  inputValidClassName?: string;
  inputInvalidClassName?: string;
  inputTouchedClassName?: string;
  inputInlineClassName?: string;

  labelClassName?: string;
  labelInlineClassName?: string;

  helpClassName?: string;
  errorClassName?: string;
}

const generateUniqueId = (() => {
  let previousId = 0;
  return (name: string) => {
    const id = ++previousId;
    return `${name}_${id}`;
  };
})();

export const Field: React.FC<FieldProps> = ({
  name,
  label,
  render,
  id = React.useMemo(() => generateUniqueId(name), []),

  help,
  inline,
  touched,
  error,
  success = touched && !error,

  fieldClassName = "field",
  fieldInlineClassName = "field--inline",
  fieldInvalidClassName = "field--erroneous",
  fieldTouchedClassName = "field--touched",
  fieldValidClassName = "field--success",

  inputClassName = "field__input",
  inputInlineClassName = "field__input--inline",
  inputInvalidClassName = "field__input--erroneous",
  inputTouchedClassName = "field__input--touched",
  inputValidClassName = "field__input--success",

  labelClassName = "field__label",
  labelInlineClassName = "field__label--inline",

  helpClassName = "field__help",
  errorClassName = "message message--problem"
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

  const inputProps = {
    id,
    name,
    className: inputClassNames.join(" ")
  };

  return (
    <div className={fieldClassNames.join(" ")}>
      {inline && render(inputProps)}

      <label className={labelClassNames.join(" ")} htmlFor={id}>
        {label}
        {help && <span className={helpClassName}>{help}</span>}
      </label>

      {!inline && render(inputProps)}

      {error && (
        <span role="alert" className={errorClassName}>
          {error}
        </span>
      )}
    </div>
  );
};

import * as React from "react";

const getValue = (target: any) => {
  switch (target.type) {
    case "checkbox":
    case "radio":
      return target.checked;
    default:
      return target.value;
  }
};

export const required = (value: any): string | undefined => {
  return typeof value === "undefined" || value === null || value === ""
    ? "This field is required"
    : undefined;
};

export const useValue = <T>(
  initialValue: T,
  validate?: (value: T) => string | undefined
) => {
  const [value, setValue] = React.useState<T>(initialValue);
  const [error, setError] = React.useState<string>();
  const [touched, setTouched] = React.useState<boolean>(false);

  const onChange = (event: React.FormEvent | T) => {
    const value = event && "target" in event ? getValue(event.target) : event;
    const error = validate && validate(value);

    setValue(value);
    setError(error);
  };

  const onBlur = () => {
    setTouched(true);
  };

  return {
    value,
    error,
    touched,
    onChange,
    onBlur
  };
};

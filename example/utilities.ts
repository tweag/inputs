import * as React from "react";

export const required = (value: any): string | undefined => {
  return typeof value === "undefined" || value === null || value === ""
    ? "This field is required"
    : undefined;
};

export const notEmpty = (value: any[]): string | undefined => {
  return value.length ? undefined : "You must choose at least one";
};

export const useValue = <T>(
  initialValue?: T,
  validate?: (value: T) => string | undefined
) => {
  const [value, setValue] = React.useState(initialValue);
  const [error, setError] = React.useState<string>();
  const [touched, setTouched] = React.useState<boolean>(false);

  return {
    value,
    error,
    touched,
    onChangeValue(value: T) {
      setValue(value);
      setError(validate && validate(value));
    },
    onBlur() {
      setTouched(true);
    }
  };
};

export const pick = (data: { [key: string]: any }, key: string): any => {
  const result: any = {};
  for (const [name, value] of Object.entries(data)) {
    result[name] = value[key];
  }
  return result;
};

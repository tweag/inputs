import * as React from "react";

export const required = (value: any): string | undefined => {
  return typeof value === "undefined" || value === null || value === ""
    ? "This field is required"
    : undefined;
};

const getValue = (target: any, current: any) => {
  if (target.type === "file") {
    return target.multiple ? target.files : target.files[0];
  }

  if (target.type === "checkbox") {
    if (target.multiple) {
      if (target.checked) {
        return [...current, target.value];
      } else {
        return current.filter((v: any) => v !== target.value);
      }
    }

    return target.checked;
  }

  return target.value;
};

export const useValue = <T>(
  initialValue: T,
  validate?: (value: T) => string | undefined
) => {
  const [value, setValue] = React.useState<T>(initialValue);
  const [error, setError] = React.useState<string>();
  const [touched, setTouched] = React.useState<boolean>(false);

  return {
    value,
    props: {
      error,
      touched,
      onChange(event: React.ChangeEvent<any>) {
        const nextValue = getValue(event.target, value);
        const error = validate && validate(nextValue);
        setValue(nextValue);
        setError(error);
      },
      onBlur() {
        setTouched(true);
      }
    }
  };
};

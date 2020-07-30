import * as React from "react";
import { Field } from "./Field";
import { Field as FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName, Size } from "./utilities";

export type InputType =
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "month"
  | "number"
  | "password"
  | "range"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface InputProps {
  field: FormField<string>;
  label: React.ReactNode;
  help?: React.ReactNode;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  size?: Size;
  type?: InputType;
  inline?: boolean;
  condensed?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
}

export function Input(props: InputProps) {
  const { field, innerRef, type = "text" } = props;
  const { id, value, setValue } = field;

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <Field variant={type} {...props}>
      <input
        id={id}
        value={value}
        type={type}
        ref={innerRef}
        onBlur={onBlur}
        onChange={onChange}
        className={getClassName(props, "field__input", `field__input--${type}`)}
        aria-labelledby={getLabelledBy(field)}
      />
    </Field>
  );
}

import * as React from "react";
import { Field, FieldProps } from "./Field";
import { FormField } from "@stackup/form";
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

export interface InputProps extends FieldProps {
  field: FormField<string>;
  size?: Size;
  type?: InputType;
  inline?: boolean;
  condensed?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
  inputClassName?: string;
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
        aria-labelledby={getLabelledBy(field)}
        className={getClassName(
          props,
          "field__input",
          `field__input--${type}`,
          props.inputClassName
        )}
      />
    </Field>
  );
}

import * as React from "react";
import { Field } from "@stackup/form";
import { useBlur } from "./utilities";
import {
  getLabelledBy,
  getClassName,
  Size,
  StyleProps,
  getRelatedId,
  getError
} from "./FieldContext";

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
  field: Field<string>;
  label: React.ReactNode;
  help?: React.ReactNode;
  size?: Size;
  type?: InputType;
  innerRef?: React.Ref<HTMLInputElement>;
  inline?: boolean;
  condensed?: boolean;
}

export function Input(props: InputProps) {
  const { field, label, help, innerRef, type = "text" } = props;
  const { id, value, setValue } = field;

  const error = getError(field);
  const errorId = getRelatedId(field, "error");
  const labelledBy = getLabelledBy(field);
  const labelId = getRelatedId(field, "label");
  const fieldClassName = getClassName(props, "field");
  const labelClassName = getClassName(props, "field__label");
  const inputClassName = getClassName(props, "field__input");
  const helpClassName = getClassName(props, "field__help");
  const errorClassName = getClassName(props, "field__error");

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <div className={fieldClassName}>
      <label id={labelId} htmlFor={id} className={labelClassName}>
        {label}
        {help && <span className={helpClassName}>{help}</span>}
      </label>
      <input
        id={id}
        value={value}
        type={type}
        ref={innerRef}
        onBlur={onBlur}
        onChange={onChange}
        className={inputClassName}
        aria-labelledby={labelledBy}
      />
      {error && (
        <span role="alert" id={errorId} className={errorClassName}>
          {error}
        </span>
      )}
    </div>
  );
}

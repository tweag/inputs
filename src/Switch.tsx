import * as React from "react";
import { Field } from "@stackup/form";
import { useBlur } from "./utilities";
import { getLabelledBy, getClassName, useFieldContext } from "./FieldContext";

type Attributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface SwitchProps extends Attributes {
  field: Field<boolean>;
  innerRef?: React.Ref<HTMLButtonElement>;
}

export function Switch(props: SwitchProps) {
  const { field, innerRef, children, ...moreProps } = props;
  const { id, value, setValue } = field;

  const context = useFieldContext();
  const labelledBy = getLabelledBy(field);
  const className = getClassName(context, "field__input", moreProps.className);

  const onBlur = useBlur(field);
  const onClick = React.useCallback(() => {
    setValue(value => !value);
  }, [setValue]);

  return (
    <button
      {...moreProps}
      id={id}
      ref={innerRef}
      type="button"
      role="switch"
      onBlur={onBlur}
      onClick={onClick}
      aria-checked={value}
      aria-label={value ? "On" : "Off"}
      aria-labelledby={labelledBy}
      className={className}
    >
      {children}
    </button>
  );
}

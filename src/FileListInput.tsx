import * as React from "react";
import { Field } from "./Field";
import { FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName, Size } from "./utilities";

export interface FileListInputProps {
  field: FormField<FileList | null>;
  label: React.ReactNode;
  help?: React.ReactNode;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  size?: Size;
  inline?: boolean;
  condensed?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
}

export function FileListInput(props: FileListInputProps) {
  const { field, innerRef } = props;
  const { id, setValue } = field;

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files || null);
    },
    [setValue]
  );

  return (
    <Field variant="file" {...props}>
      <input
        type="file"
        id={id}
        ref={innerRef}
        onBlur={onBlur}
        onChange={onChange}
        className={getClassName(props, "field__input", "field__input--file")}
        aria-labelledby={getLabelledBy(field)}
      />
    </Field>
  );
}

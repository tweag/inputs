import * as React from "react";
import { FieldProps, Field } from "formik";

type AnyComponent = React.ComponentType<any>;

type CustomFieldAttributes<T extends AnyComponent> = Omit<
  React.ComponentProps<T>,
  "value" | "onChange"
>;

interface CustomFieldConfig<T extends AnyComponent> {
  name: string;
  validate?: (value: any) => string | void | Promise<string | void>;
  innerRef?: (instance: T | null) => void;
}

export type CustomFieldProps<T extends AnyComponent> = CustomFieldConfig<T> &
  CustomFieldAttributes<T>;

export function createCustomField<T extends AnyComponent>(
  InputComponent: T,
  displayName: string
): React.FC<CustomFieldProps<T>> {
  function FormikComponent(props: CustomFieldProps<T>) {
    const { name, validate, innerRef, ...inputProps } = props;

    return (
      <Field name={name} validate={validate}>
        {({ form, field }: FieldProps) => {
          const onChange = (value: any) =>
            form.setFieldValue(field.name, value);
          const props: any = {
            ...field,
            ...inputProps,
            onChange
          };

          return (
            <InputComponent ref={innerRef} onChange={onChange} {...props} />
          );
        }}
      </Field>
    );
  }

  return Object.assign(FormikComponent, { displayName });
}

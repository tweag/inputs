import * as React from "react";
import { FieldValidator, FieldProps, Field } from "formik";

type AnyComponent = React.ComponentType<any>;

type CustomFieldAttributes<T extends AnyComponent> = Omit<
  Omit<React.ComponentProps<T>, "value">,
  "onChange"
>;

interface CustomFieldConfig<T extends AnyComponent> {
  name: string;
  validate?: FieldValidator;
  innerRef?: (instance: T | null) => void;
}

export type CustomFieldProps<T extends AnyComponent> = CustomFieldConfig<T> &
  CustomFieldAttributes<T>;

export function createCustomField<T extends AnyComponent>(
  InputComponent: T,
  displayName: string
): React.FC<CustomFieldProps<T>> {
  const Component: React.FC<CustomFieldProps<T>> = ({
    name,
    validate,
    innerRef,
    ...inputProps
  }) => (
    <Field name={name} validate={validate}>
      {({ form, field }: FieldProps) => {
        const onChange = React.useCallback(
          value => form.setFieldValue(field.name, value),
          [form.setFieldValue, field.name]
        );

        const props: any = {
          ...field,
          ...inputProps,
          onChange
        };

        return <InputComponent ref={innerRef} {...props} />;
      }}
    </Field>
  );

  return Object.assign(Component, { displayName });
}

import React from "react";
import { useFormikContext, useField, FieldProps, FieldValidator } from "formik";

type AnyComponent = React.ComponentType<any>;

type BaseInputProps<T extends AnyComponent> = Omit<
  React.ComponentProps<T>,
  "value" | "onChange"
>;

interface FieldConfig<T extends AnyComponent> {
  name: string;
  validate?: FieldValidator;
  innerRef?: (instance: T | null) => void;
}

export type PropGetter<T extends AnyComponent> = (
  config: FieldProps
) => Partial<React.ComponentProps<T>>;

export type CustomFieldProps<T extends AnyComponent> = BaseInputProps<T> &
  FieldConfig<T>;

export interface CreateField<T extends AnyComponent> {
  component: T;
  displayName: string;
  getProps: PropGetter<T>;
}

export const createField = <T extends AnyComponent>({
  getProps,
  displayName,
  component: WrappedComponent
}: CreateField<T>) => {
  const FormikField: React.FC<CustomFieldProps<T>> = ({
    name,
    validate,
    innerRef,
    ...props
  }) => {
    const formik = useFormikContext<any>();
    const [field, meta] = useField(name);

    // FIXME: This will happen automatically when this PR is released:
    // https://github.com/jaredpalmer/formik/pull/1699
    React.useEffect(() => {
      formik.registerField(name, { validate });
      return () => formik.unregisterField(name);
    }, [formik.registerField, formik.unregisterField, name, validate]);

    const inputProps = React.useMemo(
      () => getProps({ form: formik, field, meta }),
      [formik, field, meta]
    );

    return React.createElement(WrappedComponent, {
      ref: innerRef,
      value: field.value,
      ...inputProps,
      ...props
    });
  };

  // Set a display name for the input
  FormikField.displayName = displayName;

  return FormikField;
};

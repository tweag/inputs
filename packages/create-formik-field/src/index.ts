import * as React from "react";
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
  validStyle?: any;
  validClassName?: string;
  validProps?: BaseInputProps<T>;
  invalidStyle?: any;
  invalidClassName?: string;
  invalidProps?: BaseInputProps<T>;
}

export type PropGetter<T extends AnyComponent> = (
  config: FieldProps
) => Partial<React.ComponentProps<T>>;

export type CustomFieldProps<T extends AnyComponent> = BaseInputProps<T> &
  FieldConfig<T>;

export interface CreateField<T extends AnyComponent> {
  component: T;
  displayName: string;
  getProps?: PropGetter<T>;
}

/**
 * Are we currently running in React Native?
 */
const isNative = navigator ? navigator.product === "ReactNative" : false;

/**
 * These are the default set of props that an input will receive.
 */
const getDefaultProps: PropGetter<any> = ({ form, field }) => ({
  onChange: (value: any) => form.setFieldValue(field.name, value),
  onBlur: () => form.setFieldTouched(field.name, true)
});

/**
 * Merge style props. On React native, we'll just return an array.
 */
const mergeStyles = (...styles: any[]) => {
  if (!styles.length) {
    return undefined;
  }

  if (isNative) {
    return styles.filter(Boolean);
  }

  return styles.reduce((a, b) => (b ? Object.assign(a, b) : a), {});
};

/**
 * Merge class names. On React Native, we'll always return undefined.
 */
const mergeClassNames = (...classNames: any[]) => {
  if (isNative) {
    return undefined;
  }

  return classNames.filter(Boolean).join(" ") || undefined;
};

/**
 * A higher-order component that will return a Formik-compatible form field.
 */
export const createField = <T extends AnyComponent>({
  displayName,
  getProps = getDefaultProps,
  component: WrappedComponent
}: CreateField<T>) => {
  const FormikField: React.FC<CustomFieldProps<T>> = ({
    name,
    validate,
    innerRef,
    style,
    className,
    validClassName = isNative ? undefined : "is-valid",
    validStyle,
    validProps,
    invalidClassName = isNative ? undefined : "is-invalid",
    invalidStyle,
    invalidProps,
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

    const isValid = meta.touched && !meta.error;
    const isInvalid = meta.touched && meta.error;

    const inputProps = React.useMemo(
      () => getProps({ form: formik, field, meta }),
      [formik, field, meta]
    );

    return React.createElement(WrappedComponent, {
      ref: innerRef,
      value: field.value,
      style: mergeStyles(
        style,
        isValid && validStyle,
        isInvalid && invalidStyle
      ),
      className: mergeClassNames(
        className,
        isValid && validClassName,
        isInvalid && invalidClassName
      ),
      ...inputProps,
      ...props,
      ...(isValid ? validProps : {}),
      ...(isInvalid ? invalidProps : {})
    });
  };

  // Set a display name for the input
  FormikField.displayName = displayName;

  return FormikField;
};

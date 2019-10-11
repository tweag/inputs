import * as Baseline from "react-baseline-inputs";
import { createField, CustomFieldProps, PropGetter } from "create-formik-field";

export type TextInputProps = CustomFieldProps<typeof Baseline.TextInput>;
export type TextAreaProps = CustomFieldProps<typeof Baseline.TextArea>;
export type CheckboxProps = CustomFieldProps<typeof Baseline.Checkbox>;
export type SelectProps = CustomFieldProps<typeof Baseline.Select>;
export type IntegerInputProps = CustomFieldProps<typeof Baseline.IntegerInput>;
export type FloatInputProps = CustomFieldProps<typeof Baseline.FloatInput>;
export type FileInputProps = CustomFieldProps<typeof Baseline.FileInput>;
export type DateInputProps = CustomFieldProps<typeof Baseline.DateInput>;
export type DateTimeInputProps = CustomFieldProps<
  typeof Baseline.DateTimeInput
>;

const getInputProps: PropGetter<any> = ({ form, field }) => ({
  name: field.name,
  onChange: (value: any) => form.setFieldValue(field.name, value),
  onBlur: () => form.setFieldTouched(field.name, true)
});

/**
 * An HTML `<input />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It defaults to `type="text"`.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const TextInput = createField<typeof Baseline.TextInput>({
  component: Baseline.TextInput,
  displayName: "FormikTextInput",
  getProps: getInputProps
});

/**
 * An HTML `<textarea />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits a `null` value to the `onChange` handler when the input is empty.
 */
export const TextArea = createField<typeof Baseline.TextArea>({
  component: Baseline.TextArea,
  displayName: "FormikTextArea",
  getProps: getInputProps
});

/**
 * An HTML `<input type='checkbox' />`, but with the following benefits:
 *
 *   * It accepts boolean values.
 *   * It accepts `null` as a value.
 *   * It always emits a boolean value when changed.
 */
export const Checkbox = createField({
  component: Baseline.Checkbox,
  displayName: "FormikCheckbox",
  getProps: getInputProps
});

/**
 * An HTML `<select />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It accepts a `placeholder`.
 *   * It allows you to pass in an array of options.
 */
export const Select = createField({
  component: Baseline.Select,
  displayName: "FormikSelect",
  getProps: getInputProps
});

/**
 * An HTML `<input type="number" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It always emits an integer when changed.
 */
export const IntegerInput = createField({
  component: Baseline.IntegerInput,
  displayName: "FormikIntegerInput",
  getProps: getInputProps
});

/**
 * An HTML `<input type="number" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It always emits a number when changed.
 */
export const FloatInput = createField({
  component: Baseline.FloatInput,
  displayName: "FormikFloatInput",
  getProps: getInputProps
});

/**
 * An HTML `<input type="file" />`, but with the following benefits:
 *
 *   * It emits a `File | null` when changed.
 *   * When `multiple`, it will emit a `FileList` when changed.
 *   * It ignores any `value` prop that you give it.
 */
export const FileInput = createField({
  component: Baseline.FileInput,
  displayName: "FormikFileInput",
  getProps: getInputProps
});

/**
 * An HTML `<input type="date" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits an ISO-formatted date string when changed.
 */
export const DateInput = createField({
  component: Baseline.DateInput,
  displayName: "FormikDateInput",
  getProps: getInputProps
});

/**
 * An HTML `<input type="datetime-local" />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It emits an ISO-formatted datetime string when changed.
 */
export const DateTimeInput = createField({
  component: Baseline.DateTimeInput,
  displayName: "FormikDateTimeInput",
  getProps: getInputProps
});

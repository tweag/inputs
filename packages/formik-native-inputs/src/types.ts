import { ComponentType } from "react";
import { FieldValidator } from "formik";

export type AnyComponent = ComponentType<any>;

type BaseInputProps<T extends AnyComponent> = Omit<
  React.ComponentProps<T>,
  "value" | "onChange"
>;

interface FieldConfig<T extends AnyComponent> {
  name: string;
  validate?: FieldValidator;
  innerRef?: (instance: T | null) => void;
}

export type CustomFieldProps<T extends AnyComponent> = BaseInputProps<T> &
  FieldConfig<T>;

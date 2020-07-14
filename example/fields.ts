import * as Baseline from "../src";
import { FieldValidator, useField } from "formik";

interface Props {
  name: string;
  validate?: FieldValidator;
}

const useFormik = ({ name, validate }: Props) => {
  const [field, meta, helpers] = useField({ name, validate });

  return {
    name,
    error: meta.error,
    touched: meta.touched,
    value: field.value,
    onBlur: field.onBlur,
    onChangeValue: helpers.setValue
  };
};

const field: Baseline.Theme<Baseline.FieldProps> = props => ({
  field: "form-group",
  help: "form-text text-muted",
  error: "invalid-feedback",
  input: Baseline.concat(
    props.touched && !props.error && "is-valid",
    props.touched && props.error && "is-invalid"
  )
});

const config: Baseline.Config<any, Props> = {
  name: "Bootstrap",
  omit: ["validate"],
  hook: useFormik
};

export const Input = Baseline.createInput<Props>({
  ...config,
  theme: Baseline.merge(field, { input: "form-control" })
});

export const FileInput = Baseline.createFileInput<Props>({
  ...config,
  theme: Baseline.merge(field, { input: "form-control-file" })
});

export const FileListInput = Baseline.createFileListInput<Props>({
  ...config,
  theme: Baseline.merge(field, { input: "form-control-file" })
});

export const Select = Baseline.createSelect<Props>({
  ...config,
  theme: Baseline.merge(field, { input: "custom-select" })
});

export const TextArea = Baseline.createTextArea<Props>({
  ...config,
  theme: Baseline.merge(field, { input: "form-control" })
});

export const Checkbox = Baseline.createCheckbox<Props>({
  ...config,
  theme: Baseline.merge(field, {
    label: "custom-control-label",
    field: "custom-control custom-checkbox",
    input: "custom-control-input"
  })
});

export const ToggleButton = Baseline.createToggleButton<Props>({
  ...config,
  theme: Baseline.merge(field, props => ({
    input: Baseline.concat(
      "btn btn-sm btn-outline-primary mr-2",
      props.value && "active"
    )
  }))
});

export const Group = Baseline.createGroup<Props>({
  ...config,
  theme: props => ({
    input: "custom-control-input",
    help: "form-text text-muted",
    label: "custom-control-label",
    error: Baseline.concat("text-danger", !props.touched && "d-none"),
    field: Baseline.concat(
      "custom-control",
      props.type === "checkbox" ? "custom-checkbox" : "custom-radio"
    )
  })
});

export const Item = Baseline.createItem({
  name: "Bootstrap"
});

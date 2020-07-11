import { FieldValidator, useField } from "formik";
import {
  Config,
  ClassName,
  FieldProps,
  createCheckbox,
  createItem,
  createGroup,
  createFileInput,
  createFileListInput,
  createInput,
  createSelect,
  createTextArea,
  createToggleButton
} from "../src";

interface ExtraProps {
  name: string;
  validate?: FieldValidator;
}

const config: Config<FieldProps, ExtraProps> = {
  remove: ["validate"],
  useHook({ name, validate }) {
    const [field, meta, helpers] = useField({ name, validate });

    return {
      name,
      error: meta.error,
      touched: meta.touched,
      value: field.value,
      onBlur: field.onBlur,
      onChangeValue: helpers.setValue
    };
  }
};

const theme = {
  fieldClassName: "form-group",
  helpClassName: "form-text text-muted",
  errorClassName: "invalid-feedback"
};

const className: ClassName<FieldProps & ExtraProps> = {
  "is-valid": props => props.touched && !props.error,
  "is-invalid": props => props.touched && props.error
};

export const Input = createInput<ExtraProps>({
  ...config,
  theme: { ...theme, className: { ...className, "form-control": true } }
});

export const FileInput = createFileInput<ExtraProps>({
  ...config,
  theme: { ...theme, className: { ...className, "form-control-file": true } }
});

export const FileListInput = createFileListInput<ExtraProps>({
  ...config,
  theme: { ...theme, className: { ...className, "form-control-file": true } }
});

export const Select = createSelect<ExtraProps>({
  ...config,
  theme: { ...theme, className: { ...className, "custom-select": true } }
});

export const TextArea = createTextArea<ExtraProps>({
  ...config,
  theme: { ...theme, className: { ...className, "form-control": true } }
});

export const Checkbox = createCheckbox<ExtraProps>({
  ...config,
  theme: {
    ...theme,
    labelClassName: "custom-control-label",
    fieldClassName: "form-group custom-control custom-checkbox",
    className: { ...className, "custom-control-input": true }
  }
});

export const ToggleButton = createToggleButton<ExtraProps>({
  ...config,
  theme: {
    ...theme,
    className: {
      "btn btn-sm btn-outline-primary mr-2": true,
      active: props => props.value
    }
  }
});

export const Group = createGroup<ExtraProps>({
  ...config,
  theme: {
    helpClassName: "form-text text-muted",
    errorClassName: "text-danger"
  }
});

export const Item = createItem({
  theme: {
    ...theme,
    labelClassName: "custom-control-label",
    className: { ...className, "custom-control-input": true },
    fieldClassName: {
      "custom-control": true,
      "custom-checkbox": props => props.type === "checkbox",
      "custom-radio": props => props.type === "radio"
    }
  }
});

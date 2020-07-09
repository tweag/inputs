import {
  ClassName,
  createCheckbox,
  createCheckboxItem,
  createFieldSet,
  createFileInput,
  createFileListInput,
  createInput,
  createRadio,
  createSelect,
  createTextArea,
  createToggleButton
} from "../src";

interface ThemeProps {
  valid?: boolean;
  invalid?: boolean;
}

const theme = {
  props: ["valid", "invalid"],
  helpClassName: "form-text text-muted",
  errorClassName: "invalid-feedback",
  fieldClassName: "form-group"
};

const className: ClassName<ThemeProps> = {
  "is-valid": props => props.valid,
  "is-invalid": props => props.invalid
};

export const Input = createInput<ThemeProps>({
  ...theme,
  className: { ...className, "form-control": true }
});

export const FileInput = createFileInput<ThemeProps>({
  ...theme,
  className: { ...className, "form-control-file": true }
});

export const FileListInput = createFileListInput<ThemeProps>({
  ...theme,
  className: { ...className, "form-control-file": true }
});

export const Select = createSelect<ThemeProps>({
  ...theme,
  className: { ...className, "custom-select": true }
});

export const TextArea = createTextArea<ThemeProps>({
  ...theme,
  className: { ...className, "form-control": true }
});

export const Radio = createRadio<ThemeProps>({
  ...theme,
  labelClassName: "custom-control-label",
  fieldClassName: "custom-control custom-radio",
  className: { ...className, "custom-control-input": true }
});

export const Checkbox = createCheckbox<ThemeProps>({
  ...theme,
  labelClassName: "custom-control-label",
  fieldClassName: "form-group custom-control custom-checkbox",
  className: { ...className, "custom-control-input": true }
});

export const CheckboxItem = createCheckboxItem<ThemeProps>({
  ...theme,
  labelClassName: "custom-control-label",
  fieldClassName: "custom-control custom-checkbox",
  className: { ...className, "custom-control-input": true }
});

export const ToggleButton = createToggleButton<ThemeProps>({
  ...theme,
  className: {
    "btn btn-sm btn-outline-primary mr-2": true,
    active: props => props.value
  }
});

export const FieldSet = createFieldSet({
  helpClassName: "form-text text-muted",
  errorClassName: "text-danger"
});

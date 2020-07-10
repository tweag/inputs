import {
  ClassName,
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

export const Checkbox = createCheckbox<ThemeProps>({
  ...theme,
  labelClassName: "custom-control-label",
  fieldClassName: "form-group custom-control custom-checkbox",
  className: { ...className, "custom-control-input": true }
});

export const Item = createItem<ThemeProps>({
  ...theme,
  labelClassName: "custom-control-label",
  className: { ...className, "custom-control-input": true },
  fieldClassName: {
    "custom-control": true,
    "custom-checkbox": props => props.type === "checkbox",
    "custom-radio": props => props.type === "radio"
  }
});

export const ToggleButton = createToggleButton<ThemeProps>({
  ...theme,
  className: {
    "btn btn-sm btn-outline-primary mr-2": true,
    active: props => props.value
  }
});

export const Group = createGroup<ThemeProps>({
  props: ["valid", "invalid"],
  helpClassName: "form-text text-muted",
  errorClassName: "text-danger"
});

import {
  ClassName,
  createInput,
  createSelect,
  createRadio,
  createTextArea,
  createCheckbox,
  createCheckboxItem,
  createFieldSet
} from "../../src";

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

export const FieldSet = createFieldSet({
  helpClassName: "form-text text-muted",
  errorClassName: "text-danger"
});

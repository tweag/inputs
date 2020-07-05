import {
  concat,
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

const defaultProps = {
  helpClassName: "form-text text-muted",
  errorClassName: "invalid-feedback",
  containerClassName: "form-group"
};

export const Input = createInput<ThemeProps>(
  ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    className: concat(
      props.type === "file" ? "form-control-file" : "form-control",
      valid && "is-valid",
      invalid && "is-invalid"
    )
  })
);

export const Checkbox = createCheckbox<ThemeProps>(
  ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    labelClassName: "custom-control-label",
    containerClassName: "form-group custom-control custom-checkbox",
    className: concat(
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    )
  })
);

export const CheckboxItem = createCheckboxItem<ThemeProps>(
  ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    labelClassName: "custom-control-label",
    containerClassName: "custom-control custom-checkbox",
    className: concat(
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    )
  })
);

export const Radio = createRadio<ThemeProps>(
  ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    labelClassName: "custom-control-label",
    containerClassName: "custom-control custom-radio",
    className: concat(
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    )
  })
);

export const Select = createSelect<ThemeProps>(
  ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    className: concat(
      "custom-select",
      valid && "is-valid",
      invalid && "is-invalid"
    )
  })
);

export const TextArea = createTextArea<ThemeProps>(
  ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    className: concat(
      "form-control",
      valid && "is-valid",
      invalid && "is-invalid"
    )
  })
);

export const FieldSet = createFieldSet(props => ({
  ...props,
  className: "form-group",
  helpClassName: "form-text text-muted",
  errorClassName: "text-danger"
}));

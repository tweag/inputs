import {
  concat,
  decorate,
  createDecorator,
  Input as BaseInput,
  Select as BaseSelect,
  Radio as BaseRadio,
  TextArea as BaseTextArea,
  Checkbox as BaseCheckbox,
  CheckboxItem as BaseCheckboxItem,
  FieldSet as BaseFieldSet
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

const validity = (props: ThemeProps) => [
  props.valid && "is-valid",
  props.invalid && "is-invalid"
];

const theme = createDecorator<ThemeProps>({
  displayNamePrefix: "Bootstrap",
  omitProps: ["valid", "invalid"]
});

export const Input = theme(BaseInput, props => ({
  ...defaultProps,
  className: concat(
    ...validity(props),
    props.type === "file" ? "form-control-file" : "form-control"
  )
}));

export const Checkbox = theme(BaseCheckbox, props => ({
  ...defaultProps,
  labelClassName: "custom-control-label",
  containerClassName: "form-group custom-control custom-checkbox",
  className: concat(...validity(props), "custom-control-input")
}));

export const CheckboxItem = theme(BaseCheckboxItem, props => ({
  ...defaultProps,
  labelClassName: "custom-control-label",
  containerClassName: "custom-control custom-checkbox",
  className: concat(...validity(props), "custom-control-input")
}));

export const Radio = theme(BaseRadio, props => ({
  ...defaultProps,
  labelClassName: "custom-control-label",
  containerClassName: "custom-control custom-radio",
  className: concat(...validity(props), "custom-control-input")
}));

export const Select = theme(BaseSelect, props => ({
  ...defaultProps,
  className: concat(...validity(props), "custom-select")
}));

export const TextArea = theme(BaseTextArea, props => ({
  ...defaultProps,
  className: concat(...validity(props), "form-control")
}));

export const FieldSet = decorate(BaseFieldSet, () => ({
  className: "form-group",
  helpClassName: "form-text text-muted",
  errorClassName: "text-danger"
}));

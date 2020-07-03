import cc from "classcat";
import { configure } from "../../src";

interface ThemeProps {
  valid?: boolean;
  invalid?: boolean;
}

const defaultProps = {
  helpClassName: "form-text text-muted",
  errorClassName: "invalid-feedback"
};

export const {
  Input,
  Select,
  Checkbox,
  CheckboxItem,
  FieldSet,
  Radio,
  TextArea
} = configure<ThemeProps>({
  displayName: "Bootstrap",
  getInputProps: ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    containerClassName: "form-group",
    className: cc({
      "is-valid": valid,
      "is-invalid": invalid,
      "form-control": props.type !== "file",
      "form-control-file": props.type === "file"
    })
  }),
  getSelectProps: ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    containerClassName: "form-group",
    className: cc({
      "is-valid": valid,
      "is-invalid": invalid,
      "custom-select": true
    })
  }),
  getCheckboxItemProps: ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    labelClassName: "custom-control-label",
    containerClassName: "custom-control custom-checkbox",
    className: cc({
      "is-valid": valid,
      "is-invalid": invalid,
      "custom-control-input": true
    })
  }),
  getCheckboxProps: ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    labelClassName: "custom-control-label",
    containerClassName: "custom-control custom-checkbox",
    className: cc({
      "is-valid": valid,
      "is-invalid": invalid,
      "custom-control-input": true
    })
  }),
  getFieldSetProps: ({ valid, invalid, ...props }) => ({
    ...props,
    helpClassName: "form-text text-muted",
    errorClassName: "text-danger"
  }),
  getRadioProps: ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    labelClassName: "custom-control-label",
    containerClassName: "custom-control custom-radio",
    className: cc({
      "is-valid": valid,
      "is-invalid": invalid,
      "custom-control-input": true
    })
  }),
  getTextAreaProps: ({ valid, invalid, ...props }) => ({
    ...props,
    ...defaultProps,
    containerClassName: "form-group",
    className: cc({
      "is-valid": valid,
      "is-invalid": invalid,
      "form-control": true
    })
  })
});

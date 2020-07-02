import cc from "classcat";
import { Theme } from "../types";

export const bootstrap: Theme = {
  getClassNames(type, props) {
    const isCheckbox = type === "checkbox";
    const isRadio = type === "radio";
    const isSelect = type === "select";
    const isSwitch = type === "switch";
    const isFile = ["file", "file-list"].includes(type);
    const isControl = !isCheckbox && !isRadio && !isSelect && !isSwitch;

    return {
      help: "form-text text-muted",
      error: "invalid-feedback",
      field: cc({
        "form-check": isCheckbox || isRadio,
        "custom-control": isSwitch,
        "custom-switch": isSwitch
      }),
      label: cc({
        "form-check-label": isCheckbox || isRadio,
        "custom-control-label": isSwitch
      }),
      input: cc({
        "form-control": isControl && !isFile,
        "form-control-file": isFile,
        "form-control-sm": isControl && props.small,
        "form-control-lg": isControl && props.large,
        "form-check-input": isCheckbox || isRadio,
        "custom-select": isSelect,
        "custom-select-sm": isSelect && props.small,
        "custom-select-lg": isSelect && props.large,
        "custom-control-input": isSwitch,
        "is-valid": props.valid,
        "is-invalid": props.invalid
      })
    };
  }
};

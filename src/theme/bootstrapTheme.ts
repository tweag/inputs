import cc from "classcat";
import { Theme } from "../types";

export const bootstrapTheme: Theme = {
  buildFieldSet() {
    return {
      help: "form-text text-muted",
      error: "invalid-feedback"
    };
  },
  buildField(type, ctx) {
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
        "form-control-sm": isControl && ctx.small,
        "form-control-lg": isControl && ctx.large,
        "form-check-input": isCheckbox || isRadio,
        "custom-select": isSelect,
        "custom-select-sm": isSelect && ctx.small,
        "custom-select-lg": isSelect && ctx.large,
        "custom-control-input": isSwitch,
        "is-valid": ctx.success,
        "is-invalid": ctx.error
      })
    };
  }
};

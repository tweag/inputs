import cc from "classcat";
import { Theme } from "../types";

export const bootstrapTheme: Theme = ctx => {
  const isCheckbox = ctx.type === "checkbox";
  const isSelect = ctx.type === "select";
  const isToggle = ctx.type === "toggle-button";
  const isFile = ["file", "file-list"].includes(ctx.type);

  let label: string | undefined = undefined;

  const field: Record<string, boolean> = {
    "form-group": true
  };

  const input: Record<string, boolean> = {
    "is-valid": ctx.success,
    "is-invalid": ctx.error
  };

  if (isCheckbox) {
    label = "form-check-label";
    field["form-check"] = true;
    input["form-check-input"] = true;
  } else if (isSelect) {
    input["custom-select"] = true;
    input["custom-select-sm"] = ctx.small;
    input["custom-select-lg"] = ctx.large;
  } else if (isToggle) {
    label = "custom-control-label";
    field["custom-control"] = true;
    field["custom-switch"] = true;
    input["custom-control-input"] = true;
  } else {
    input["form-control"] = !isFile;
    input["form-control-file"] = isFile;
    input["form-control-sm"] = ctx.small;
    input["form-control-lg"] = ctx.large;
  }

  return {
    label,
    error: "invalid-feedback",
    help: "form-text text-muted",
    field: cc(field),
    input: cc(input)
  };
};

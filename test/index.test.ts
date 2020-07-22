import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toEqual([
    "Checkbox",
    "CheckboxGroup",
    "FileInput",
    "FileListInput",
    "Input",
    "RadioGroup",
    "Select",
    "Switch",
    "TextArea",
    "concat",
    "createCheckbox",
    "createCheckboxGroup",
    "createFileInput",
    "createFileListInput",
    "createInput",
    "createRadioGroup",
    "createSelect",
    "createSwitch",
    "createTextArea",
    "formatDateTime",
    "formatNumber",
    "formatTime",
    "isValidDateTime",
    "isValidNumber",
    "isValidTime",
    "merge",
    "parseDateTime",
    "parseNumber",
    "parseTime",
    "useComponentId",
    "useField",
    "useFieldSet"
  ]);
});

import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toEqual([
    "Checkbox",
    "CheckboxItem",
    "FieldSet",
    "FileInput",
    "FileListInput",
    "Input",
    "Radio",
    "Select",
    "TextArea",
    "ToggleButton",
    "createCheckbox",
    "createCheckboxItem",
    "createFieldSet",
    "createFileInput",
    "createFileListInput",
    "createInput",
    "createRadio",
    "createSelect",
    "createTextArea",
    "createToggleButton",
    "formatDateTime",
    "formatNumber",
    "formatTime",
    "parseDateTime",
    "parseNumber",
    "parseTime",
    "useComponentId",
    "useField"
  ]);
});

import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toEqual([
    "Checkbox",
    "FileInput",
    "FileListInput",
    "Group",
    "Input",
    "Item",
    "Select",
    "TextArea",
    "ToggleButton",
    "concat",
    "createCheckbox",
    "createFileInput",
    "createFileListInput",
    "createGroup",
    "createInput",
    "createItem",
    "createSelect",
    "createTextArea",
    "createToggleButton",
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

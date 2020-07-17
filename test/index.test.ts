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
    "Switch",
    "TextArea",
    "concat",
    "createCheckbox",
    "createFileInput",
    "createFileListInput",
    "createGroup",
    "createInput",
    "createItem",
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

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
    "Switch",
    "TextArea",
    "formatDateTime",
    "formatNumber",
    "formatTime",
    "isValidDateTime",
    "isValidNumber",
    "isValidTime",
    "parseDateTime",
    "parseNumber",
    "parseTime"
  ]);
});

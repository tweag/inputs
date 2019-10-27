import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toEqual([
    "Checkbox",
    "DateInput",
    "DateTimeInput",
    "Field",
    "FileInput",
    "FileListInput",
    "FloatInput",
    "IntegerInput",
    "RadioGroup",
    "Select",
    "TextArea",
    "TextInput",
    "ToggleButton",
    "useField"
  ]);
});

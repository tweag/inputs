import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toEqual([
    "Checkbox",
    "CheckboxList",
    "DateInput",
    "DateTimeInput",
    "Field",
    "FileInput",
    "FileListInput",
    "FloatInput",
    "Input",
    "IntegerInput",
    "RadioGroup",
    "Select",
    "TextArea",
    "ToggleButton",
    "useField"
  ]);
});

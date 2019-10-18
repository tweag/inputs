import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toEqual([
    "Checkbox",
    "DateInput",
    "DateTimeInput",
    "Field",
    "FileInput",
    "FloatInput",
    "IntegerInput",
    "Select",
    "TextArea",
    "TextInput",
    "useField"
  ]);
});

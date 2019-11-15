import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs).sort()).toEqual([
    "Checkbox",
    "CheckboxList",
    "DateInput",
    "DateTimeInput",
    "Field",
    "FieldSet",
    "FileInput",
    "FileListInput",
    "FloatInput",
    "Input",
    "IntegerInput",
    "MaskedInput",
    "RadioGroup",
    "Select",
    "SubmitButton",
    "TextArea",
    "ThemeProvider",
    "TimeInput",
    "ToggleButton",
    "bootstrapTheme",
    "defaultTheme",
    "useField",
    "useTheme"
  ]);
});

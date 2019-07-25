import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs)).toEqual([
    "Input",
    "Checkbox",
    "Select",
    "IntegerInput",
    "FloatInput",
    "FileInput",
    "DateInput",
    "DateTimeInput"
  ]);
});

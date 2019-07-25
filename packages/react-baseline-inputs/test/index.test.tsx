import * as inputs from "../src";

test("exports", () => {
  expect(Object.keys(inputs)).toEqual([
    "Checkbox",
    "DateInput",
    "DateTimeInput",
    "FileInput",
    "FloatInput",
    "Input",
    "IntegerInput",
    "Select"
  ]);
});

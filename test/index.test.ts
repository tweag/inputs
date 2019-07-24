import * as input from "../src";

it("exports all inputs", () => {
  expect(Object.keys(input)).toEqual([
    "Input",
    "Switch",
    "Picker",
    "NumericInput",
    "IntegerInput",
    "FloatInput",
    "DateInput",
    "TimeInput",
    "DateTimeInput"
  ]);
});

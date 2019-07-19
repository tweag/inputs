import * as input from "../src";

it("exports all inputs", () => {
  expect(Object.keys(input)).toEqual([
    "DateInput",
    "DateTimeInput",
    "DecimalInput",
    "FloatInput",
    "Input",
    "IntegerInput"
  ]);
});

import * as input from "../src";

it("exports all inputs", () => {
  expect(Object.keys(input)).toEqual([
    "Input",
    "NumericInput",
    "IntegerInput",
    "FloatInput",
    "Picker",
    "DatePicker",
    "TimePicker",
    "DateTimePicker",
    "Switch"
  ]);
});

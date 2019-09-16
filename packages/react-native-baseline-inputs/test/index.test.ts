import * as inputs from "../src";

it("exports all inputs", () => {
  expect(Object.keys(inputs)).toEqual([
    "Input",
    "NumericInput",
    "IntegerInput",
    "FloatInput",
    "Picker",
    "DatePicker",
    "TimePicker",
    "DateTimePicker",
    "Switch",
    "StaticInput"
  ]);
});

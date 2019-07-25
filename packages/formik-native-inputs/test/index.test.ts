import * as inputs from "../src";

it("exports all inputs", () => {
  expect(Object.keys(inputs)).toEqual([
    "Input",
    "Switch",
    "Picker",
    "NumericInput",
    "IntegerInput",
    "FloatInput",
    "DatePicker",
    "TimePicker",
    "DateTimePicker"
  ]);
});

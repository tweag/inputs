import * as inputs from "../src";

test('exports', () => {
  expect(Object.keys(inputs)).toEqual([
    "asFormik",
    "Checkbox",
    "FormikCheckbox",
    "DateInput",
    "FormikDateInput",
    "DateTimeInput",
    "FormikDateTimeInput",
    "FileInput",
    "FormikFileInput",
    "FloatInput",
    "FormikFloatInput",
    "Input",
    "FormikInput",
    "IntegerInput",
    "FormikIntegerInput",
    "Select",
    "FormikSelect"
  ]);
});

import * as inputs from "../src";

it("exports all inputs", () => {
  expect(Object.keys(inputs)).toEqual([
    "createField"
  ]);
});

import * as input from "../src";

it("exports all inputs", () => {
  expect(Object.keys(input)).toEqual(["value"]);
});

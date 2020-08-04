import { concat } from "../src";

test("concat", () => {
  expect(concat(undefined, false)).toBeUndefined();
  expect(concat(undefined, false, "foo")).toEqual("foo");
  expect(concat("foo", undefined, false)).toEqual("foo");
});

import { remove, contains } from "../src/utilities";

test("remove", () => {
  expect(remove([1, 2], 2)).toEqual([1]);
  expect(remove([{ foo: "bar" }, { foo: "baz" }], { foo: "baz" })).toEqual([
    { foo: "bar" }
  ]);
});

test("contains", () => {
  expect(contains([1, 2], 2)).toBe(true);
  expect(contains([{ foo: "bar" }, { foo: "baz" }], { foo: "baz" })).toBe(true);
});

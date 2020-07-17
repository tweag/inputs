import { apply, Theme, merge } from "../src/theme";

describe("apply", () => {
  it("builds a theme prop from an object", () => {
    const theme: Theme<{}> = { input: "input" };
    expect(apply(theme, {})).toEqual({ input: "input" });
  });

  it("builds a theme prop from a function", () => {
    const theme: Theme<{ foo: boolean }> = props => ({
      input: props.foo ? "foo" : "bar"
    });

    expect(apply(theme, { foo: true })).toEqual({ input: "foo" });
    expect(apply(theme, { foo: false })).toEqual({ input: "bar" });
  });
});

describe("merge", () => {
  it("combines two objects", () => {
    const a: Theme<{}> = { input: "a" };
    const b: Theme<{}> = { input: "b" };
    expect(merge(a, b)({})).toEqual({ input: "a b" });
  });

  it("combines two functions", () => {
    const a: Theme<{}> = () => ({ input: "a" });
    const b: Theme<{}> = () => ({ input: "b" });
    expect(merge(a, b)({})).toEqual({ input: "a b" });
  });

  it("combines an object, then a function", () => {
    const a: Theme<{}> = { input: "a" };
    const b: Theme<{}> = () => ({ input: "b" });
    expect(merge(a, b)({})).toEqual({ input: "a b" });
  });

  it("combines an a function, then an object", () => {
    const a: Theme<{}> = () => ({ input: "a" });
    const b: Theme<{}> = { input: "b" };
    expect(merge(a, b)({})).toEqual({ input: "a b" });
  });

  it("combines themes with no overlapping properties", () => {
    const a: Theme<{}> = () => ({ input: "a" });
    const b: Theme<{}> = { field: "b" };
    expect(merge(a, b)({})).toEqual({ field: "b", input: "a" });
  });
});

import { Theme, merge } from "../src";

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

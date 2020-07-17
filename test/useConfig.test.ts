import { renderHook } from "@testing-library/react-hooks";
import { Config, FieldProps, Theme, merge } from "../src";
import { useConfig } from "../src/useConfig";

interface Props {
  foo?: boolean;
  bar?: boolean;
}

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

describe("useConfig", () => {
  const props: Props = { foo: true, bar: true };

  it("deletes custom props", () => {
    const config: Config<FieldProps, Props> = {
      omit: ["foo"]
    };

    const { result } = renderHook(() =>
      useConfig<FieldProps, Props>(config, props)
    );

    expect(result.current).toEqual({ bar: true });
  });

  it("loads props from a hook", () => {
    const config: Config<FieldProps, Props> = {
      hook: props => ({ touched: props.foo })
    };

    const { result } = renderHook(() =>
      useConfig<FieldProps, Props>(config, props)
    );

    expect(result.current).toEqual({ ...props, touched: true });
  });

  it("injects a theme prop", () => {
    const config: Config<FieldProps, Props> = {
      theme: { input: "foo" }
    };

    const { result } = renderHook(() =>
      useConfig<FieldProps, Props>(config, props)
    );

    expect(result.current).toEqual({ ...props, theme: { input: "foo" } });
  });

  it("injects a theme function", () => {
    const config: Config<FieldProps, Props> = {
      theme: props => ({ input: props.foo ? "foo" : undefined })
    };

    const { result } = renderHook(() =>
      useConfig<FieldProps, Props>(config, props)
    );

    expect(result.current).toEqual({ ...props, theme: { input: "foo" } });
  });
});

import { Theme } from "../src";
import { applyTheme } from "../src/theme";

interface Props {
  other?: boolean;
  className?: string;
}

interface ThemeProps {
  foo?: boolean;
  bar?: boolean;
}

describe("applyTheme", () => {
  it("removes theme props", () => {
    const theme: Theme<ThemeProps, Props> = { props: ["foo"] };
    const newProps = applyTheme({ foo: true, other: true }, theme);
    expect(newProps).toEqual({ other: true });
  });

  it("creates a `className` from a string", () => {
    const theme: Theme<ThemeProps, Props> = { className: "foo" };
    const newProps = applyTheme({}, theme);
    expect(newProps).toEqual({ className: "foo" });
  });

  it("creates a `className` from an object with boolean values", () => {
    const theme: Theme<ThemeProps, Props> = {
      className: { foo: true }
    };

    const newProps = applyTheme({}, theme);
    expect(newProps).toEqual({ className: "foo" });
  });

  it("creates a `className` based on props", () => {
    const theme: Theme<ThemeProps, Props> = {
      props: ["foo", "bar"],
      className: {
        foo: props => props.foo,
        bar: props => props.bar
      }
    };

    const newProps = applyTheme({ foo: true, bar: false }, theme);
    expect(newProps).toEqual({ className: "foo" });
  });

  it("appends to an incoming `className`", () => {
    const theme: Theme<ThemeProps, Props> = { className: "foo" };
    const newProps = applyTheme({ className: "bar" }, theme);
    expect(newProps).toEqual({ className: "bar foo" });
  });

  it("appends to an incoming `clasName` when given an object", () => {
    const theme: Theme<ThemeProps, Props> = { className: { foo: true } };
    const newProps = applyTheme({ className: "bar" }, theme);
    expect(newProps).toEqual({ className: "bar foo" });
  });
});

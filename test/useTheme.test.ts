import { Theme } from "../src";
import { useTheme } from "../src/useTheme";

interface Props {
  other?: boolean;
  className?: string;
}

interface ThemeProps {
  foo?: boolean;
  bar?: boolean;
}

describe("useTheme", () => {
  it("removes theme props", () => {
    const theme: Theme<ThemeProps, Props> = { props: ["foo"] };
    const newProps = useTheme({ foo: true, other: true }, theme);
    expect(newProps).toEqual({ other: true });
  });

  it("creates a `className` from a string", () => {
    const theme: Theme<ThemeProps, Props> = { className: "foo" };
    const newProps = useTheme({}, theme);
    expect(newProps).toEqual({ className: "foo" });
  });

  it("creates a `className` from an object with boolean values", () => {
    const theme: Theme<ThemeProps, Props> = {
      className: { foo: true }
    };

    const newProps = useTheme({}, theme);
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

    const newProps = useTheme({ foo: true, bar: false }, theme);
    expect(newProps).toEqual({ className: "foo" });
  });

  it("appends to an incoming `className`", () => {
    const theme: Theme<ThemeProps, Props> = { className: "foo" };
    const newProps = useTheme({ className: "bar" }, theme);
    expect(newProps).toEqual({ className: "bar foo" });
  });

  it("appends to an incoming `clasName` when given an object", () => {
    const theme: Theme<ThemeProps, Props> = { className: { foo: true } };
    const newProps = useTheme({ className: "bar" }, theme);
    expect(newProps).toEqual({ className: "bar foo" });
  });
});

import * as React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { make } from "./helpers";
import { FieldProps, createTheme, ThemeProvider } from "../src";
import { useFieldProps } from "../src/useFieldProps";

const theme = createTheme({
  field: () => "field",
  label: () => "label",
  help: () => "help",
  error: () => "error",
  input: () => "input"
});

const wrapper: React.FC = ({ children }) => {
  return React.createElement(ThemeProvider, { value: theme }, children);
};

function setup<T extends FieldProps<string, any>>(props: Partial<T> = {}) {
  const field = make("");
  const hook = renderHook(
    () => useFieldProps({ field, label: "Example", ...props }, ["example"]),
    { wrapper }
  );

  return hook.result.current;
}

describe("useField", () => {
  describe("getInputProps", () => {
    it("assigns an ID", () => {
      const props = setup();
      expect(props.id).toEqual(props.field.id);
    });

    it("passes along a ref", () => {
      const innerRef = jest.fn();
      const props = setup({ innerRef });
      expect(props.ref).toEqual(innerRef);
    });

    it("is labeled by the `label`", () => {
      const props = setup({ label: "Label" });
      expect(props["aria-labelledby"]).toContain("--label");
    });

    it("passes along the error", () => {
      const field = make("", { error: "Error", touched: true });
      const props = setup({ field });

      expect(props.error).toEqual("Error");
      expect(props["aria-describedby"]).toContain("--error");
    });

    it("ignores the error when not touched", () => {
      const field = make("", { error: "Error" });
      const props = setup({ field });

      expect(props.error).toBeUndefined();
      expect(props["aria-describedby"]).toBeUndefined();
    });

    it("ignores the error when the error is not a string", () => {
      const field = make("", { error: ["Error"] as any });
      const props = setup({ field });

      expect(props.error).toBeUndefined();
      expect(props["aria-describedby"]).toBeUndefined();
    });

    it("builds a `className`", () => {
      const props = setup({ inputClassName: "testing" });
      expect(props.className).toEqual("input testing");
    });

    it("passes along all other props", () => {
      const props = setup<any>({ foo: true });
      expect(props.foo).toEqual(true);
    });
  });

  describe("getFieldProps", () => {
    it("builds a `className`", () => {
      const props = setup({ className: "testing" });
      const fieldProps = props.getFieldProps();
      expect(fieldProps.className).toEqual("field testing");
    });
  });

  describe("getLabelProps", () => {
    it("has `id`", () => {
      const props = setup();
      const labelProps = props.getLabelProps();
      expect(labelProps.id).toContain("--label");
    });

    it("has a `htmlFor`", () => {
      const field = make("");
      const props = setup({ field });
      const labelProps = props.getLabelProps();
      expect(labelProps.htmlFor).toEqual(field.id);
    });

    it("builds a `className`", () => {
      const props = setup({ labelClassName: "testing" });
      const labelProps = props.getLabelProps();
      expect(labelProps.className).toEqual("label testing");
    });
  });

  describe("getErrorProps", () => {
    it("has a `role` of `alert`", () => {
      const field = make("", { error: "Error", touched: true });
      const props = setup({ field });
      const errorProps = props.getErrorProps();
      expect(errorProps.role).toEqual("alert");
    });

    it("builds a `className`", () => {
      const props = setup({ errorClassName: "testing" });
      const errorProps = props.getErrorProps();
      expect(errorProps.className).toContain("error testing");
    });
  });

  describe("getHelpProps", () => {
    it("builds a `className`", () => {
      const props = setup({ helpClassName: "testing" });
      const helpProps = props.getHelpProps();
      expect(helpProps.className).toEqual("help testing");
    });
  });
});

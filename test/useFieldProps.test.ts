import { renderHook } from "@testing-library/react-hooks";
import { make } from "./helpers";
import { FieldProps } from "../src";
import { useFieldProps } from "../src/useFieldProps";

function setup<T extends FieldProps<string, any>>(props: Partial<T> = {}) {
  const field = make("");

  const hook = renderHook(() => {
    return useFieldProps({
      field,
      label: "Example",
      ...props
    });
  });

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

    it("appends the `inputClassName`", () => {
      const props = setup({ inputClassName: "testing" });
      expect(props.className).toContain("testing");
    });

    it("passes along all other props", () => {
      const props = setup<any>({ foo: true });
      expect(props.foo).toEqual(true);
    });
  });

  describe("getFieldProps", () => {
    it("appends the `className`", () => {
      const props = setup({ className: "testing" });
      const fieldProps = props.getFieldProps();
      expect(fieldProps.className).toContain("testing");
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

    it("appends the `labelClassName`", () => {
      const props = setup({ labelClassName: "testing" });
      const labelProps = props.getLabelProps();
      expect(labelProps.className).toContain("testing");
    });
  });

  describe("getErrorProps", () => {
    it("has a `role` of `alert`", () => {
      const field = make("", { error: "Error", touched: true });
      const props = setup({ field });
      const errorProps = props.getErrorProps();
      expect(errorProps.role).toContain("alert");
    });

    it("appends the `errorClassName`", () => {
      const props = setup({ errorClassName: "testing" });
      const errorProps = props.getErrorProps();
      expect(errorProps.className).toContain("testing");
    });
  });

  describe("getHelpProps", () => {
    it("appends the `helpClassName`", () => {
      const props = setup({ helpClassName: "testing" });
      const helpProps = props.getHelpProps();
      expect(helpProps.className).toContain("testing");
    });
  });
});

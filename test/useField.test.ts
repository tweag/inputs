import { renderHook } from "@testing-library/react-hooks";
import { useField, FieldProps } from "./../src";

function setup<T extends FieldProps>(props: T) {
  const hook = renderHook(() => useField(props));
  return hook.result.current;
}

describe("useField", () => {
  describe("getInputProps", () => {
    it("assigns an ID", () => {
      const field = setup({});
      const input = field.getInputProps();
      expect(input.id).toMatch(/^input-\d+$/);
    });

    it("accepts a custom ID", () => {
      const field = setup({ id: "abc" });
      const props = field.getInputProps();
      expect(props.id).toEqual("abc");
    });

    it("passes along a ref", () => {
      const innerRef = jest.fn();
      const field = setup({ innerRef });
      const props = field.getInputProps();
      expect(props.ref).toEqual(innerRef);
    });

    it("is labeled by the `label`", () => {
      const field = setup({ label: "Label", labelProps: { id: "label" } });
      const props = field.getInputProps();
      expect(props["aria-labelledby"]).toEqual("label");
    });

    it("is labeled by the `error`", () => {
      const field = setup({ error: "Error", errorProps: { id: "error" } });
      const props = field.getInputProps();
      expect(props["aria-labelledby"]).toEqual("error");
    });

    it("combines the `theme.input` with the `className`", () => {
      const field = setup({ theme: { input: "a" }, className: "b" });
      const props = field.getInputProps();
      expect(props.className).toEqual("a b");
    });

    it("passes along all other props", () => {
      const field = setup<any>({ foo: true });
      const props = field.getInputProps();
      expect(props.foo).toEqual(true);
    });
  });

  describe("getFieldProps", () => {
    it("combines the `theme.field` with the `fieldClassName`", () => {
      const field = setup({ theme: { field: "a" }, fieldClassName: "b" });
      const props = field.getFieldProps();
      expect(props.className).toEqual("a b");
    });

    it("passes along `fieldProps`", () => {
      const field = setup({ fieldProps: { "data-testid": "field" } });
      const props = field.getFieldProps();
      expect(props["data-testid"]).toEqual("field");
    });
  });

  describe("getLabelProps", () => {
    it("combines the `theme.label` with the `labelClassName`", () => {
      const field = setup({ theme: { label: "a" }, labelClassName: "b" });
      const props = field.getLabelProps();
      expect(props.className).toEqual("a b");
    });

    it("passes along `labelProps`", () => {
      const field = setup({ labelProps: { "data-testid": "label" } });
      const props = field.getLabelProps();
      expect(props["data-testid"]).toEqual("label");
    });
  });

  describe("getErrorProps", () => {
    it("combines the `theme.error` with the `errorClassName`", () => {
      const field = setup({ theme: { error: "a" }, errorClassName: "b" });
      const props = field.getErrorProps();
      expect(props.className).toEqual("a b");
    });

    it("passes along `errorProps`", () => {
      const field = setup({ errorProps: { "data-testid": "error" } });
      const props = field.getErrorProps();
      expect(props["data-testid"]).toEqual("error");
    });
  });

  describe("getHelpProps", () => {
    it("combines the `theme.help` with the `helpClassName`", () => {
      const field = setup({ theme: { help: "a" }, helpClassName: "b" });
      const props = field.getHelpProps();
      expect(props.className).toEqual("a b");
    });

    it("passes along `errorProps`", () => {
      const field = setup({ helpProps: { "data-testid": "help" } });
      const props = field.getHelpProps();
      expect(props["data-testid"]).toEqual("help");
    });
  });
});

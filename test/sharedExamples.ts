import { RenderResult } from "@testing-library/react";
import { FieldProps } from "../src";
import { axe } from "jest-axe";

type Render = (props?: Partial<FieldProps>) => RenderResult;

export function includeAllFieldTests(render: Render) {
  includeFieldTests(render);
  includeLabelTests(render);
  includeHelpTests(render);
  includeErrorTests(render);
}

export function includeFieldTests(render: Render) {
  it("renders", () => {
    const field = render();
    expect(field.container.firstChild).toMatchSnapshot();
  });

  it("respects `innerRef`", () => {
    const innerRef = jest.fn();
    render({ innerRef });
    expect(innerRef).toHaveBeenCalled();
  });
}

export function includeLabelTests(render: Render) {
  describe("label", () => {
    it("renders", () => {
      const field = render({ label: "Label" });
      expect(field.container).toHaveTextContent("Label");
      expect(field.container.firstChild).toMatchSnapshot();
    });

    it("has a corresponding input", () => {
      const field = render({ label: "Label" });
      const input = field.queryByLabelText("Label");
      expect(input).toBeInTheDocument();
    });

    it("respects `labelProps` and `labelClassName`", () => {
      const field = render({
        label: "Label",
        labelProps: { "data-testid": "label", className: "a" },
        labelClassName: "b"
      });

      const label = field.queryByTestId("label");
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass("a b");
    });
  });
}

export function includeHelpTests(render: Render) {
  describe("help", () => {
    it("renders", () => {
      const field = render({ label: "Label", help: "Help" });
      expect(field.container).toHaveTextContent("Help");
      expect(field.container.firstChild).toMatchSnapshot();
    });

    it("is accessible", async () => {
      const field = render({ label: "Label", help: "Help" });
      expect(await axe(field.container)).toHaveNoViolations();
    });

    it("respects `helpProps` and `helpClassName`", () => {
      const field = render({
        label: "Label",
        help: "Help",
        helpProps: { "data-testid": "help", className: "a" },
        helpClassName: "b"
      });

      const help = field.queryByTestId("help");
      expect(help).toBeInTheDocument();
      expect(help).toHaveClass("a b");
    });
  });
}

export function includeErrorTests(render: Render) {
  describe("error", () => {
    it("renders", () => {
      const field = render({ label: "Label", error: "Error" });
      expect(field.container).toHaveTextContent("Error");
      expect(field.container.firstChild).toMatchSnapshot();
    });

    it("has a corresponding input", () => {
      const field = render({ label: "Label", error: "Error" });
      const input = field.queryByLabelText("Error");
      expect(input).toBeInTheDocument();
    });

    it("is accessible", async () => {
      const field = render({ label: "Label", error: "Error" });
      expect(await axe(field.container)).toHaveNoViolations();
    });

    it("respects `errorProps` and `errorClassName`", () => {
      const field = render({
        error: "Error",
        errorProps: { "data-testid": "error", className: "a" },
        errorClassName: "b"
      });

      const error = field.queryByTestId("error");
      expect(error).toBeInTheDocument();
      expect(error).toHaveClass("a b");
    });
  });
}

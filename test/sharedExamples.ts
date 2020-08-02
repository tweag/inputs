import { RenderResult } from "@testing-library/react";
import { axe } from "jest-axe";
import { make } from "./helpers";
import { FieldProps } from "../src";

type Render<T> = (props?: Partial<FieldProps<T, any>>) => RenderResult;

export function includeAllFieldTests<T>(value: T, render: Render<T>) {
  includeFieldTests(value, render);
  includeLabelTests(value, render);
  includeHelpTests(value, render);
  includeErrorTests(value, render);
}

export function includeFieldTests<T>(_value: T, render: Render<T>) {
  it("renders", () => {
    const field = render();
    expect(field.container.firstChild).toMatchSnapshot();
  });

  it("appends a variant", () => {
    const { container } = render({ help: "Help", variant: "foo" });
    expect(container.querySelector(".field--foo")).toBeInTheDocument();
    expect(container.querySelector(".field__input--foo")).toBeInTheDocument();
    expect(container.querySelector(".field__label--foo")).toBeInTheDocument();
    expect(container.querySelector(".field__help--foo")).toBeInTheDocument();
  });

  it("appends a list of variants", () => {
    const { container } = render({ help: "Help", variant: ["foo"] });
    expect(container.querySelector(".field--foo")).toBeInTheDocument();
    expect(container.querySelector(".field__input--foo")).toBeInTheDocument();
    expect(container.querySelector(".field__label--foo")).toBeInTheDocument();
    expect(container.querySelector(".field__help--foo")).toBeInTheDocument();
  });

  it("respects `innerRef`", () => {
    const innerRef = jest.fn();
    render({ innerRef });
    expect(innerRef).toHaveBeenCalled();
  });
}

export function includeLabelTests<T>(_value: T, render: Render<T>) {
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

    it("respects `labelClassName`", () => {
      const field = render({ label: "Label", labelClassName: "test" });
      const label = field.getByText("Label");
      expect(label).toHaveClass("test");
    });
  });
}

export function includeHelpTests<T>(_value: T, render: Render<T>) {
  describe("help", () => {
    it("renders", () => {
      const field = render({ help: "Help" });
      expect(field.container).toHaveTextContent("Help");
      expect(field.container.firstChild).toMatchSnapshot();
    });

    it("is accessible", async () => {
      const field = render({ help: "Help" });
      expect(await axe(field.container)).toHaveNoViolations();
    });

    it("respects `helpClassName`", () => {
      const field = render({ help: "Help", helpClassName: "test" });
      const help = field.getByText("Help");
      expect(help).toHaveClass("test");
    });
  });
}

export function includeErrorTests<T>(value: T, render: Render<T>) {
  describe("error", () => {
    it("renders", () => {
      const field = make(value, { error: "Error", touched: true });
      const { container } = render({ field });
      expect(container).toHaveTextContent("Error");
      expect(container.firstChild).toMatchSnapshot();
    });

    it("describes an input", () => {
      const field = make(value, { error: "Error", touched: true });
      const { getByLabelText, getByText } = render({ field, label: "Label" });
      const input = getByLabelText("Label");
      const error = getByText("Error");
      expect(input).toHaveAttribute("aria-describedby", error.id);
    });

    it("is accessible", async () => {
      const field = make(value, { error: "Error", touched: true });
      const { container } = render({ field });
      expect(await axe(container)).toHaveNoViolations();
    });

    it("respects  `errorClassName`", () => {
      const field = make(value, { error: "Error", touched: true });
      const { getByText } = render({ field, errorClassName: "test" });

      const error = getByText("Error");
      expect(error).toHaveClass("test");
    });
  });
}

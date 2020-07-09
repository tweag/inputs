import * as React from "react";
import { FieldSet, FieldSetProps } from "../src";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";

function setup(props: Partial<FieldSetProps> = {}) {
  return render(<FieldSet {...props} />);
}

describe("<FieldSet />", () => {
  it("renders", () => {
    const field = setup();
    expect(field.container.firstChild).toMatchSnapshot();
  });

  it("is accessible", async () => {
    const field = setup();
    expect(await axe(field.container)).toHaveNoViolations();
  });

  describe("children", () => {
    it("renders", () => {
      const field = setup({ children: "Children" });
      expect(field.container).toHaveTextContent("Children");
      expect(field.container.firstChild).toMatchSnapshot();
    });
  });

  describe("legend", () => {
    it("renders", () => {
      const field = setup({ legend: "Legend" });
      expect(field.container).toHaveTextContent("Legend");
      expect(field.container.firstChild).toMatchSnapshot();
    });

    it("respects `legendProps` and `legendClassName`", () => {
      const field = setup({
        legend: "Legend",
        legendProps: { "data-testid": "legend", className: "a" },
        legendClassName: "b"
      });

      const legend = field.queryByTestId("legend");
      expect(legend).toBeInTheDocument();
      expect(legend).toHaveClass("a b");
    });
  });

  describe("help", () => {
    it("renders", () => {
      const field = setup({ help: "Help" });
      expect(field.container).toHaveTextContent("Help");
      expect(field.container.firstChild).toMatchSnapshot();
    });

    it("is accessible", async () => {
      const field = setup({ help: "Help" });
      expect(await axe(field.container)).toHaveNoViolations();
    });

    it("respects `helpProps` and `helpClassName`", () => {
      const field = setup({
        help: "Help",
        helpProps: { "data-testid": "help", className: "a" },
        helpClassName: "b"
      });

      const help = field.queryByTestId("help");
      expect(help).toBeInTheDocument();
      expect(help).toHaveClass("a b");
    });
  });

  describe("error", () => {
    it("renders", () => {
      const field = setup({ error: "Error" });
      expect(field.container).toHaveTextContent("Error");
      expect(field.container.firstChild).toMatchSnapshot();
    });

    it("is accessible", async () => {
      const field = setup({ error: "Error" });
      expect(await axe(field.container)).toHaveNoViolations();
    });

    it("respects `errorProps` and `errorClassName`", () => {
      const field = setup({
        error: "Error",
        errorProps: { "data-testid": "error", className: "a" },
        errorClassName: "b"
      });

      const error = field.queryByTestId("error");
      expect(error).toBeInTheDocument();
      expect(error).toHaveClass("a b");
    });
  });
});

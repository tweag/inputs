import * as React from "react";
import { axe } from "jest-axe";
import { render, fireEvent } from "@testing-library/react";
import { RadioGroup, RadioGroupProps } from "../src";

function setup(props: Partial<RadioGroupProps<string>> = {}) {
  return render(
    <RadioGroup name="group" {...props}>
      <RadioGroup.Option value="foo" label="Foo" />
    </RadioGroup>
  );
}

describe("<RadioGroup />", () => {
  it("renders", () => {
    const field = setup();
    expect(field.container.firstChild).toMatchSnapshot();
  });

  it("is accessible", async () => {
    const field = setup();
    expect(await axe(field.container)).toHaveNoViolations();
  });

  it("has a value", () => {
    const field = setup({ value: "foo" });
    const input = field.getByRole("radio");
    expect(input).toBeChecked();
  });

  it("emits `onChangeValue`", () => {
    const onChangeValue = jest.fn();
    const field = setup({ onChangeValue });
    const input = field.getByRole("radio");
    fireEvent.click(input);
    expect(onChangeValue).toHaveBeenCalledWith("foo");
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

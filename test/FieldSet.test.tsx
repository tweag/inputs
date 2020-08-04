import * as React from "react";
import { render } from "@testing-library/react";
import { FieldSet, FieldSetProps } from "../src";
import { make } from "./helpers";

function setup(props: Partial<FieldSetProps> = {}) {
  return render(<FieldSet legend="Example" field={make<any>("")} {...props} />);
}

describe("<FieldSet />", () => {
  it("renders", () => {
    const { container } = setup({ legend: "Legend" });
    expect(container).toHaveTextContent("Legend");
    expect(container).toMatchSnapshot();
  });

  it("renders children", () => {
    const { container } = setup({ children: "Children" });
    expect(container).toHaveTextContent("Children");
    expect(container).toMatchSnapshot();
  });

  it("renders help", () => {
    const { container } = setup({ help: "Help" });
    expect(container).toHaveTextContent("Help");
    expect(container).toMatchSnapshot();
  });

  it("renders error", () => {
    const field = make<any>("", { error: "Error", touched: true });
    const { container, getByText } = setup({ field });
    const error = getByText("Error");

    expect(container).toHaveTextContent("Error");
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute("aria-describedby", error.id);
  });

  it("does not render error when not touched", () => {
    const field = make<any>("", { error: "Error" });
    const { container } = setup({ field });
    expect(container).not.toHaveTextContent("Error");
    expect(container.firstChild).not.toHaveAttribute("aria-describedby");
  });

  it("does not render error when error is not a string", () => {
    const field = make<any>("", { error: ["Error"], touched: true });
    const { container } = setup({ field });
    expect(container).not.toHaveTextContent("Error");
    expect(container.firstChild).not.toHaveAttribute("aria-describedby");
  });

  it("appends `className`", () => {
    const { container } = setup({ className: "testing" });
    expect(container.firstChild).toHaveClass("testing");
  });

  it("appends `legendClassName`", () => {
    const { getByText } = setup({
      legend: "Legend",
      legendClassName: "testing"
    });
    expect(getByText("Legend")).toHaveClass("testing");
  });

  it("appends `helpClassName`", () => {
    const { getByText } = setup({ help: "Help", helpClassName: "testing" });
    expect(getByText("Help")).toHaveClass("testing");
  });

  it("appends `errorClassName`", () => {
    const field = make<any>("", { error: "Error", touched: true });
    const { getByText } = setup({ field, errorClassName: "testing" });
    expect(getByText("Error")).toHaveClass("testing");
  });
});

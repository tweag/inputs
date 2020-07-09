import * as React from "react";
import { ToggleButton, ToggleButtonProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

function setup(props: Partial<ToggleButtonProps> = {}) {
  return render(<ToggleButton value={false} {...props} />);
}

describe("<ToggleButton />", () => {
  itBehavesLikeAField(setup);

  it("is a switch", () => {
    const field = setup();
    const button = field.getByRole("switch");
    expect(button).not.toBeChecked();
  });

  it("has a value", () => {
    const field = setup({ value: true });
    const button = field.getByRole("switch");
    expect(button).toBeChecked();
  });

  it("emits `onClick`", () => {
    const onClick = jest.fn();
    const field = setup({ onClick });
    const button = field.getByRole("switch");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("emits `onChangeValue`", () => {
    const onChangeValue = jest.fn();
    const field = setup({ onChangeValue });
    const button = field.getByRole("switch");

    fireEvent.click(button);
    expect(onChangeValue).toHaveBeenCalledWith(true);
  });

  describe("children", () => {
    it("renders", () => {
      const field = setup({ children: "Children" });
      expect(field.container).toHaveTextContent("Children");
    });
  });
});

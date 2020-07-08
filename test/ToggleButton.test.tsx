import * as React from "react";
import { ToggleButton, ToggleButtonProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

function setup(props: Partial<ToggleButtonProps> = {}) {
  return render(
    <ToggleButton onChange={() => null} value={false} {...props} />
  );
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

  it("emits `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
    const button = field.getByRole("switch");

    fireEvent.click(button);

    expect(onChange).toHaveBeenCalledWith(true);
  });
});

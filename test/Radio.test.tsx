import * as React from "react";
import { Radio, RadioProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

const REPRESENTS = { name: "Rick" };

function setup(props: Partial<RadioProps<any>> = {}) {
  return render(<Radio represents={REPRESENTS} {...props} />);
}

describe("<Radio />", () => {
  itBehavesLikeAField(setup);

  it("is a radio", () => {
    const field = setup();
    const input = field.getByRole("radio");
    expect(input).toHaveAttribute("type", "radio");
    expect(input).not.toBeChecked();
  });

  it("respects `value`", () => {
    const field = setup({ value: REPRESENTS });
    const input = field.getByRole("radio");
    expect(input).toBeChecked();
  });

  it("can be uncontrolled", () => {
    const field = setup({ defaultChecked: true });
    const input = field.getByRole("radio");
    expect(input).toBeChecked();
  });

  it("sets the `value` attribute when `represents` is a string", () => {
    const field = setup({ represents: "foo" });
    const input = field.getByRole("radio");
    expect(input).toHaveAttribute("value", "foo");
  });

  it("emits `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
    const input = field.getByRole("radio");

    fireEvent.click(input);

    expect(onChange).toHaveBeenCalledWith(REPRESENTS);
  });
});

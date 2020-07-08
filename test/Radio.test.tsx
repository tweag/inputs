import * as React from "react";
import { Radio, RadioProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

const REPRESENTS = { name: "Rick" };

function setup(props: Partial<RadioProps<any>> = {}) {
  return render(
    <Radio
      value={null}
      onChange={() => null}
      represents={REPRESENTS}
      {...props}
    />
  );
}

describe("<Radio />", () => {
  itBehavesLikeAField(setup);

  it("is a radio", () => {
    const field = setup();
    const input = field.getByRole("radio");
    expect(input).toHaveAttribute("type", "radio");
    expect(input).not.toBeChecked();
  });

  it("has a value", () => {
    const field = setup({ value: REPRESENTS });
    const input = field.getByRole("radio");
    expect(input).toBeChecked();
  });

  it("emits `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
    const input = field.getByRole("radio");

    fireEvent.click(input);

    expect(onChange).toHaveBeenCalledWith(REPRESENTS);
  });
});

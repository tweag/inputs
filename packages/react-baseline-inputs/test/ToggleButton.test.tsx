import * as React from "react";
import { ToggleButton, ToggleButtonProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

const setup = (props: Partial<ToggleButtonProps> = {}) =>
  render(
    <ToggleButton label="Jawn" value={true} onChange={jest.fn()} {...props} />
  );

describe("<ToggleButton />", () => {
  itBehavesLikeAField(setup);

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.click(getByLabelText("Jawn"));
    expect(onChange).toHaveBeenCalledWith(false);
  });
});

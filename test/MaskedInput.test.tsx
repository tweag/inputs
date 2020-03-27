import * as React from "react";
import { MaskedInput, MaskedInputProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

const setup = (props: Partial<MaskedInputProps> = {}) =>
  render(
    <MaskedInput
      label="Jawn"
      mask={[/\d/]}
      value="2"
      onChange={jest.fn()}
      {...props}
    />
  );

describe("<MaskedInput />", () => {
  itBehavesLikeAField(setup);

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "1" },
    });

    expect(onChange).toHaveBeenCalledWith("1");
  });

  test("emits `null` when the value is blank", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "" },
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});

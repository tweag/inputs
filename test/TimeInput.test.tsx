import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";
import { TimeInput, TimeInputProps } from "../src";

const setup = (props: Partial<TimeInputProps> = {}) =>
  render(
    <TimeInput label="Jawn" value="12:04" onChange={jest.fn()} {...props} />
  );

describe("<TimeInput />", () => {
  itBehavesLikeAField(setup);

  it("emits an ISO-formatted time", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "09:06" }
    });

    expect(onChange).toHaveBeenCalledWith("13:06:00");
  });
});

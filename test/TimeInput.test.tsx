import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";
import { TimeInput, TimeInputProps } from "../src";

const value = "10:22";
const nextValue = "11:23";

const setup = (props: Partial<TimeInputProps> = {}) =>
  render(
    <TimeInput label="Jawn" value={value} onChange={jest.fn()} {...props} />
  );

describe("<TimeInput />", () => {
  itBehavesLikeAField(setup);

  it("emits an ISO-formatted time", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: nextValue },
    });

    expect(onChange).toHaveBeenCalledWith(nextValue);
  });
});

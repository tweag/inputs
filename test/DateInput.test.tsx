import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";
import { DateInput, DateInputProps } from "../src";

const value = "2001-01-01";
const nextValue = "2018-06-13";

const setup = (props: Partial<DateInputProps> = {}) =>
  render(
    <DateInput label="Jawn" value={value} onChange={jest.fn()} {...props} />
  );

describe("<DateInput />", () => {
  itBehavesLikeAField(setup);

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: nextValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextValue);
  });
});

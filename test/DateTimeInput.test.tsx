import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";
import { DateTimeInput, DateTimeInputProps } from "../src";

const value = "2001-01-01T05:00:00.000Z";
const nextLocalValue = "2018-06-13T19:00";
const nextISOValue = "2018-06-13T19:00:00.000Z";

const setup = (props: Partial<DateTimeInputProps> = {}) =>
  render(
    <DateTimeInput label="Jawn" value={value} onChange={jest.fn()} {...props} />
  );

describe("<DateTimeInput />", () => {
  itBehavesLikeAField(setup);

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: nextLocalValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextISOValue);
  });
});

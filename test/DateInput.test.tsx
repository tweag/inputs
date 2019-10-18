import * as React from "react";
import { DateInput } from "../src";
import { render, fireEvent } from "@testing-library/react";

const value = "2001-01-01";
const nextValue = "2018-06-13";

describe("<DateInput />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const { container } = render(
      <DateInput label="Jawn" value={value} onChange={onChange} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <DateInput label="Jawn" value={value} onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: nextValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextValue);
  });
});

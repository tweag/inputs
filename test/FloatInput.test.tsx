import * as React from "react";
import { FloatInput } from "../src";
import { render, fireEvent } from "@testing-library/react";

describe("<FloatInput />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const { container } = render(
      <FloatInput label="Jawn" value={5.5} onChange={onChange} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <FloatInput label="Jawn" value={5} onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "5.5" }
    });

    expect(onChange).toHaveBeenCalledWith(5.5);
  });

  it("emits `null` if the value is not a float", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <FloatInput label="Jawn" value={5} onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});

import * as React from "react";
import { IntegerInput } from "../src";
import { render, fireEvent } from "@testing-library/react";

describe("<IntegerInput />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const { container } = render(
      <IntegerInput label="Jawn" value={5} onChange={onChange} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <IntegerInput label="Jawn" value={5} onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "6" }
    });

    expect(onChange).toHaveBeenCalledWith(6);
  });

  it("emits `null` if the value is not a float", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <IntegerInput label="Jawn" value={5} onChange={onChange} />
    );

    fireEvent.change(getByLabelText("Jawn"), {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});

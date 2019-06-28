import React from "react";
import { shallow } from "enzyme";
import { DateTimeInput } from "../src";

describe("<DateTimeInput />", () => {
  const value = "2001-01-01T05:00:00.000Z";
  const nextLocalValue = "2018-06-13T19:00";
  const nextISOValue = "2018-06-13T23:00:00.000Z";

  it("renders", () => {
    const onChange = jest.fn();
    const input = shallow(<DateTimeInput value={value} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <input
        onChange={[Function]}
        type="datetime-local"
        value="2001-01-01T00:00:00"
      />
    `);
  });

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const input = shallow(<DateTimeInput value={value} onChange={onChange} />);

    input.simulate("change", {
      target: { value: nextLocalValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextISOValue);
  });
});

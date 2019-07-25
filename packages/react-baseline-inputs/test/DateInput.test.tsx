import * as React from "react";
import { shallow } from "enzyme";
import { DateInput } from "../src";

describe("<DateInput />", () => {
  const value = "2001-01-01";
  const nextValue = "2018-06-13";

  it("renders", () => {
    const onChange = jest.fn();
    const input = shallow(<DateInput value={value} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <input
        onChange={[Function]}
        type="date"
        value="2001-01-01"
      />
    `);
  });

  it("emits an ISO-formatted date", () => {
    const onChange = jest.fn();
    const input = shallow(<DateInput value={value} onChange={onChange} />);

    input.simulate("change", {
      target: { value: nextValue }
    });

    expect(onChange).toHaveBeenCalledWith(nextValue);
  });
});

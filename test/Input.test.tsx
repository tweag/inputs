import * as React from "react";
import { shallow } from "enzyme";
import { Input } from "../src";

describe("<Input />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const input = shallow(<Input type="text" value="" onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <input
        onChange={[Function]}
        type="text"
        value=""
      />
    `);
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const input = shallow(<Input type="text" value="" onChange={onChange} />);

    input.simulate("change", {
      target: { value: "hi" }
    });

    expect(onChange).toHaveBeenCalledWith("hi");
  });
});

import * as React from "react";
import { shallow } from "enzyme";
import { IntegerInput } from "../src";

describe("<IntegerInput />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const input = shallow(<IntegerInput value={null} onChange={onChange} />);

    expect(input).toMatchInlineSnapshot(`
      <input
        onChange={[Function]}
        type="number"
        value=""
      />
    `);
  });

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const input = shallow(<IntegerInput value={null} onChange={onChange} />);

    input.simulate("change", {
      target: { value: "5" }
    });

    expect(onChange).toHaveBeenCalledWith(5);
  });

  it("emits `null` if the value is not an integer", () => {
    const onChange = jest.fn();
    const input = shallow(<IntegerInput value={null} onChange={onChange} />);

    input.simulate("change", {
      target: { value: "" }
    });

    expect(onChange).toHaveBeenCalledWith(null);
  });
});

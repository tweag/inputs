import * as React from "react";
import { FloatInput } from "../src";
import { shallow } from "enzyme";

describe("<FloatInput />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const input = shallow(<FloatInput value={5} onChange={onChange} />);
    expect(input).toMatchSnapshot();
  });

  it("emits an integer value on change", () => {
    const onChange = jest.fn();
    const input = shallow(<FloatInput value={null} onChange={onChange} />);
    input.find("NumericInput").simulate("change", "1");
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("emits an float value on change", () => {
    const onChange = jest.fn();
    const input = shallow(<FloatInput value={null} onChange={onChange} />);
    input.find("NumericInput").simulate("change", "1.5");
    expect(onChange).toHaveBeenCalledWith(1.5);
  });

  it("emits a `null` for `null` values", () => {
    const onChange = jest.fn();
    const input = shallow(<FloatInput value={null} onChange={onChange} />);
    input.find("NumericInput").simulate("change", null);
    expect(onChange).toHaveBeenCalledWith(null);
  });
});

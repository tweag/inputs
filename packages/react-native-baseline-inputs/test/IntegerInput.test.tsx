import * as React from "react";
import { shallow } from "enzyme";
import { IntegerInput } from "../src";

describe("<IntegerInput />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const input = shallow(<IntegerInput value={5} onChange={onChange} />);
    expect(input).toMatchSnapshot();
  });

  it("emits an integer value on change", () => {
    const onChange = jest.fn();
    const input = shallow(<IntegerInput value={null} onChange={onChange} />);
    input.find("TextInput").simulate("changeText", "aaaa1aaaaa");
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("emits a `null` value when the input cannot be parsed", () => {
    const onChange = jest.fn();
    const input = shallow(<IntegerInput value={null} onChange={onChange} />);
    input.find("TextInput").simulate("changeText", "aaaaa");
    expect(onChange).toHaveBeenCalledWith(null);
  });
});

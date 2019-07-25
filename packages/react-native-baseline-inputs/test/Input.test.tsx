import * as React from "react";
import { shallow } from "enzyme";
import { Input } from "../src";

describe("<Input />", () => {
  it("renders", () => {
    const onChange = jest.fn();
    const input = shallow(<Input value="hello" onChange={onChange} />);

    expect(input).toMatchSnapshot();
  });

  it("emits a value on change", () => {
    const onChange = jest.fn();
    const input = shallow(<Input value="hello" onChange={onChange} />);

    input.find("TextInput").simulate("changeText", "goodbye");
    expect(onChange).toHaveBeenCalledWith("goodbye");
  });

  it("emits a `null` value on change when the text is blank", () => {
    const onChange = jest.fn();
    const input = shallow(<Input value="hello" onChange={onChange} />);

    input.find("TextInput").simulate("changeText", " ");
    expect(onChange).toHaveBeenCalledWith(null);
  });
});

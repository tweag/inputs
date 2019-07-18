import React from "react";
import { shallow } from "enzyme";
import { BooleanInput } from "../src";

it("renders", () => {
  const onChange = jest.fn();
  const input = shallow(<BooleanInput value={true} onChange={onChange} />);
  expect(input).toMatchSnapshot();
});

it("emits a boolean value on change", () => {
  const onChange = jest.fn();
  const input = shallow(<BooleanInput value={true} onChange={onChange} />);
  input.find("Switch").simulate("valueChange", false);
  expect(onChange).toHaveBeenCalledWith(false);
});

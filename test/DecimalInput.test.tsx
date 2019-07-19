import React from "react";
import { DecimalInput } from "../src";
import { shallow, ShallowWrapper } from "enzyme";

describe("<DecimalInput />", () => {
  let input!: ShallowWrapper<{}, {}, DecimalInput>;
  let onChange!: jest.Mock<any, any>;
  let setNativeProps!: jest.SpyInstance<any, any>;

  const triggerChange = (value: string) => {
    input.find("TextInput").simulate("changeText", value);
  };

  beforeEach(() => {
    onChange = jest.fn();
    input = shallow(<DecimalInput value="99" onChange={onChange} />);
    setNativeProps = jest.spyOn(input.instance(), 'setNativeProps');
  });

  it("renders", () => {
    expect(input).toMatchSnapshot();
  });

  it("accepts integers", () => {
    triggerChange("5");
    expect(onChange).toHaveBeenCalledWith("5");
    expect(setNativeProps).not.toHaveBeenCalled();
  });

  it("accepts negative integers", () => {
    triggerChange("-5");
    expect(onChange).toHaveBeenCalledWith("-5");
    expect(setNativeProps).not.toHaveBeenCalled();
  });

  it("accepts decimals", () => {
    triggerChange("5.1");
    expect(onChange).toHaveBeenCalledWith("5.1");
    expect(setNativeProps).not.toHaveBeenCalled();
  });

  it("accepts negative decimals", () => {
    triggerChange("-5.1");
    expect(onChange).toHaveBeenCalledWith("-5.1");
    expect(setNativeProps).not.toHaveBeenCalled();
  });

  it("removes trailing decimal points", () => {
    triggerChange("5.");
    expect(onChange).toHaveBeenCalledWith("5");
    expect(setNativeProps).not.toHaveBeenCalled();
  });

  it("removes extra decimal values", () => {
    triggerChange("5.1.4");
    expect(onChange).toHaveBeenCalledWith("5.1");
    expect(setNativeProps).toHaveBeenCalledWith({ text: "5.1" });
  });

  it("removes non-digit characters", () => {
    triggerChange("5.1abc");
    expect(onChange).toHaveBeenCalledWith("5.1");
    expect(setNativeProps).toHaveBeenCalledWith({ text: "5.1" });
  });

  it("removes spaces", () => {
    triggerChange("5.1  ");
    expect(onChange).toHaveBeenCalledWith("5.1");
    expect(setNativeProps).toHaveBeenCalledWith({ text: "5.1" });
  });

  it("casts a blank string to `null`", () => {
    triggerChange("");
    expect(onChange).toHaveBeenCalledWith(null);
    expect(setNativeProps).not.toHaveBeenCalled();
  });

  it("casts a minus to `null`", () => {
    triggerChange("-");
    expect(onChange).toHaveBeenCalledWith(null);
    expect(setNativeProps).not.toHaveBeenCalled();
  });
});

import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";
import { RadioGroup, RadioGroupProps } from "../src";

const setup = (props: Partial<RadioGroupProps> = {}) =>
  render(
    <RadioGroup
      options={[
        { label: "Foo", value: "foo" },
        { label: "Bar", value: "bar" },
        { label: "Disabled", value: "buzz", disabled: true }
      ]}
      value={null}
      onChange={jest.fn()}
      {...props}
    />
  );

describe("<RadioGroup />", () => {
  itBehavesLikeAField(setup, ["label", "wrapper", "id"]);

  test("emits the value on change", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.click(getByLabelText("Foo"));

    expect(onChange).toHaveBeenCalledWith("foo");
  });

  describe("an array of strings as options", () => {
    const options = ["foo", "bar", "buzz"];

    it("accepts an array of strings as options", () => {
      const { container } = setup({ options });
      expect(container.firstChild).toMatchSnapshot();
    });

    it("emits a value", () => {
      const onChange = jest.fn();
      const { getByLabelText } = setup({ options, onChange });

      fireEvent.click(getByLabelText("foo"));

      expect(onChange).toHaveBeenCalledWith("foo");
    });
  });
});

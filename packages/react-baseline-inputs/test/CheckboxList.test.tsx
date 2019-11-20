import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";
import { CheckboxList, CheckboxListProps } from "../src";

const setup = (props: Partial<CheckboxListProps> = {}) =>
  render(
    <CheckboxList
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

describe("<CheckboxList />", () => {
  itBehavesLikeAField(setup, ["label", "id"]);

  test("adds a new value when checked", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange });

    fireEvent.click(getByLabelText("Foo"));
    expect(onChange).toHaveBeenCalledWith(["foo"]);
  });

  test("removes an existing value when unchecked", () => {
    const onChange = jest.fn();
    const { getByLabelText } = setup({ onChange, value: ["foo"] });

    fireEvent.click(getByLabelText("Foo"));
    expect(onChange).toHaveBeenCalledWith([]);
  });

  describe("an array of strings as options", () => {
    const options = ["foo", "bar", "buzz"];

    it("accepts an array of strings as options", () => {
      const { container } = setup({ options });
      expect(container.firstChild).toMatchSnapshot();
    });

    it("adds a new value when checked", () => {
      const onChange = jest.fn();
      const { getByLabelText } = setup({ options, onChange });

      fireEvent.click(getByLabelText("foo"));
      expect(onChange).toHaveBeenCalledWith(["foo"]);
    });

    test("removes an existing value when unchecked", () => {
      const onChange = jest.fn();
      const { getByLabelText } = setup({ options, onChange, value: ["foo"] });

      fireEvent.click(getByLabelText("foo"));
      expect(onChange).toHaveBeenCalledWith([]);
    });
  });

  describe("<fieldset>", () => {
    const options = ["foo", "bar", "buzz"];

    it("is wrapped in a <fieldset> by default", () => {
      const { container } = setup({ options });
      expect(container.firstChild).toMatchSnapshot();
    });

    it("can be rendered unwrapped", () => {
      const { container } = setup({ options, wrapper: false });
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

import * as React from "react";
import { Select } from "../src";
import { render, fireEvent } from "@testing-library/react";

describe("<Select />", () => {
  describe("an array of strings as options", () => {
    const options = ["foo", "bar", "buzz"];

    it("renders with default values", () => {
      const onChange = jest.fn();
      const { container } = render(
        <Select
          label="Jawn"
          value="foo"
          options={options}
          onChange={onChange}
        />
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it("accepts a placeholder", () => {
      const onChange = jest.fn();
      const { container } = render(
        <Select
          label="Jawn"
          value={null}
          options={options}
          onChange={onChange}
          placeholder="Choose an option"
        />
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it("emits a value", () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(
        <Select
          label="Jawn"
          value="foo"
          options={options}
          onChange={onChange}
        />
      );

      fireEvent.change(getByLabelText("Jawn"), {
        target: { value: "bar" }
      });

      expect(onChange).toHaveBeenCalledWith("bar");
    });
  });

  describe("an array of objects as options", () => {
    const options = [
      { label: "Foo", value: "foo" },
      { label: "Bar", value: "bar", disabled: true },
      { label: "Buzz", value: "buzz" }
    ];

    it("renders", () => {
      const onChange = jest.fn();
      const { container } = render(
        <Select
          label="Jawn"
          value="foo"
          onChange={onChange}
          options={options}
        />
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it("emits the `value` property", () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(
        <Select
          label="Jawn"
          value="foo"
          onChange={onChange}
          options={options}
        />
      );

      fireEvent.change(getByLabelText("Jawn"), {
        target: { value: "buzz" }
      });

      expect(onChange).toHaveBeenCalledWith("buzz");
    });
  });
});

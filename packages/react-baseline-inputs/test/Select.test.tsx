import * as React from "react";
import { Select, SelectProps } from "../src";
import { render, fireEvent } from "@testing-library/react";

const setup = (props: Partial<SelectProps> = {}) =>
  render(<Select label="Jawn" value={null} onChange={jest.fn()} {...props} />);

describe("<Select />", () => {
  describe("an array of strings as options", () => {
    const options = ["foo", "bar", "buzz"];

    it("accepts an array of strings as options", () => {
      const { container } = setup({ options });
      expect(container.firstChild).toMatchSnapshot();
    });

    it("accepts a placeholder", () => {
      const { container } = setup({
        options,
        placeholder: "Choose an option"
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it("emits a value", () => {
      const onChange = jest.fn();
      const { getByLabelText } = setup({ options, onChange });

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
      const { container } = setup({ options });
      expect(container.firstChild).toMatchSnapshot();
    });

    it("emits the `value` property", () => {
      const onChange = jest.fn();
      const { getByLabelText } = setup({ options, onChange });

      fireEvent.change(getByLabelText("Jawn"), {
        target: { value: "buzz" }
      });

      expect(onChange).toHaveBeenCalledWith("buzz");
    });
  });
});

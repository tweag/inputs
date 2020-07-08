import * as React from "react";
import { Select, SelectProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

function setup(props: Partial<SelectProps> = {}) {
  return render(
    <Select options={[]} onChange={() => null} value="" {...props} />
  );
}

describe("<Select />", () => {
  itBehavesLikeAField(setup);

  it("has a value", () => {
    const field = setup({ value: "dog", options: ["dog"] });
    const select = field.getByRole("combobox");
    expect(select).toHaveValue("dog");
  });

  it("emits `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange, options: ["dog"] });
    const select = field.getByRole("combobox");

    fireEvent.change(select, {
      target: { value: "dog" }
    });

    expect(onChange).toHaveBeenCalledWith("dog");
  });

  describe("children", () => {
    it("renders", () => {
      const field = setup({ children: <option>child</option> });
      const option = field.getByRole("option");
      expect(option).toHaveTextContent("child");
    });
  });

  describe("placeholder", () => {
    it("renders", () => {
      const field = setup({ placeholder: "placeholder" });
      const option = field.getByRole("option");

      expect(option).toBeDisabled();
      expect(option).toHaveTextContent("placeholder");
      expect(option).toHaveAttribute("value", "");
    });
  });

  describe("options", () => {
    it("renders", () => {
      const field = setup({ options: [{ value: "dog" }] });
      const option = field.getByRole("option");

      expect(option).toHaveTextContent("dog");
      expect(option).toHaveAttribute("value", "dog");
    });

    it("renders custom labels", () => {
      const field = setup({ options: [{ value: "dog", label: "Dog" }] });
      const option = field.getByRole("option");

      expect(option).toHaveTextContent("Dog");
      expect(option).toHaveAttribute("value", "dog");
    });

    it("renders when disabled", () => {
      const field = setup({
        options: [{ value: "Option", disabled: true }]
      });

      expect(field.getByRole("option")).toBeDisabled();
    });

    it("renders strings", () => {
      const field = setup({ options: ["dog"] });
      const option = field.getByRole("option");

      expect(option).toHaveTextContent("dog");
      expect(option).toHaveAttribute("value", "dog");
    });
  });
});

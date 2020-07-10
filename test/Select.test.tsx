import * as React from "react";
import { Select, SelectProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

function setup(props: Partial<SelectProps> = {}) {
  return render(
    <Select {...props}>
      <option value="dog">Dog</option>
    </Select>
  );
}

describe("<Select />", () => {
  itBehavesLikeAField(setup);

  it("has a value", () => {
    const field = setup({ value: "dog" });
    const select = field.getByRole("combobox");
    expect(select).toHaveValue("dog");
  });

  it("emits `onChange`", () => {
    const onChange = jest.fn();
    const field = setup({ onChange });
    const select = field.getByRole("combobox");

    fireEvent.change(select, {
      target: { value: "dog" }
    });

    expect(onChange).toHaveBeenCalled();
  });

  it("emits `onChangeValue`", () => {
    const onChangeValue = jest.fn();
    const field = setup({ onChangeValue });
    const select = field.getByRole("combobox");

    fireEvent.change(select, {
      target: { value: "dog" }
    });

    expect(onChangeValue).toHaveBeenCalledWith("dog");
  });

  describe("placeholder", () => {
    it("renders", () => {
      const field = setup({ placeholder: "placeholder" });
      const [option] = field.getAllByRole("option");

      expect(option).toBeDisabled();
      expect(option).toHaveTextContent("placeholder");
      expect(option).toHaveAttribute("value", "");
    });
  });
});

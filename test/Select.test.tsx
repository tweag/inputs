import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { make } from "./helpers";
import { Select, SelectProps } from "../src";
import { includeAllFieldTests } from "./sharedExamples";

function setup(props: Partial<SelectProps> = {}) {
  return render(
    <Select label="Example" field={make<string>("")} {...props}>
      <option value="dog">Dog</option>
    </Select>
  );
}

describe("<Select />", () => {
  includeAllFieldTests<string>("", setup);

  it("has a value", () => {
    const field = make("dog");
    const { getByRole } = setup({ field });
    const select = getByRole("combobox");
    expect(select).toHaveValue("dog");
  });

  it("changes the value", () => {
    const field = make("");
    const { getByRole } = setup({ field });
    const select = getByRole("combobox");

    fireEvent.change(select, {
      target: { value: "dog" }
    });

    expect(field.setValue).toHaveBeenCalledWith("dog");
  });

  describe("placeholder", () => {
    it("renders", () => {
      const { getAllByRole } = setup({ placeholder: "placeholder" });
      const [option] = getAllByRole("option");

      expect(option).toBeDisabled();
      expect(option).toHaveTextContent("placeholder");
      expect(option).toHaveAttribute("value", "");
    });
  });
});

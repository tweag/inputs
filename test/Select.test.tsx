import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { make } from "./helpers";
import { Select, SelectProps } from "../src";
import { includeAllFieldTests } from "./sharedExamples";

enum Foo {
  BAR = "bar"
}

function setup(props: Partial<SelectProps<string>> = {}) {
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

  describe("when the value is a string enum", () => {
    it("changes the value", () => {
      const field = make<Foo | null>(null);
      const { getByRole } = render(
        <Select label="Example" field={field}>
          <option value={Foo.BAR}>Bar</option>
        </Select>
      );

      const select = getByRole("combobox");
      fireEvent.change(select, { value: "bar" });

      expect(field.setValue).toHaveBeenCalledWith(Foo.BAR);
    });
  });
});

import * as React from "react";
import { Switch, SwitchProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { includeAllFieldTests } from "./sharedExamples";
import { make } from "./helpers";

function setup(props: Partial<SwitchProps> = {}) {
  return render(
    <Switch label="Example" field={make<boolean>(false)} {...props} />
  );
}

describe("<Switch />", () => {
  includeAllFieldTests<boolean>(false, setup);

  it("is a switch", () => {
    const { getByRole } = setup();
    const button = getByRole("switch");
    expect(button).not.toBeChecked();
  });

  it("has a value", () => {
    const field = make<boolean>(true);
    const { getByRole } = setup({ field });
    const button = getByRole("switch");
    expect(button).toBeChecked();
  });

  it("changes the value", () => {
    const field = make<boolean>(false);
    const { getByRole } = setup({ field });
    const button = getByRole("switch");

    fireEvent.click(button);
    expect(field.setValue).toHaveBeenCalled();
  });

  describe("children", () => {
    it("renders", () => {
      const { container } = setup({ children: "Children" });
      expect(container).toHaveTextContent("Children");
    });
  });
});

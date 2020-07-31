import * as React from "react";
import { make } from "./helpers";
import { TextArea, TextAreaProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { includeAllFieldTests } from "./sharedExamples";

function setup(props: Partial<TextAreaProps> = {}) {
  return render(
    <TextArea label="Example" field={make<string>("")} {...props} />
  );
}

describe("<TextArea />", () => {
  includeAllFieldTests<string>("", setup);

  it("has a value", () => {
    const field = make<string>("foo");
    const { getByRole } = setup({ field });
    const input = getByRole("textbox");
    expect(input).toHaveValue("foo");
  });

  it("changes the value", () => {
    const field = make<string>("");
    const { getByRole } = setup({ field });
    const input = getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "hi" }
    });

    expect(field.setValue).toHaveBeenCalledWith("hi");
  });
});

import * as React from "react";
import { render } from "@testing-library/react";
import { FieldSet, FieldSetProps } from "../src";
import { itBehavesLikeAField } from "./sharedExamples";

const setup = (props: Partial<FieldSetProps> = {}) =>
  render(<FieldSet legend="Jawn" {...props} />);

describe("<FieldSet />", () => {
  itBehavesLikeAField(setup, ["label", "inline"]);

  it("accepts a passed className", () => {
    const { container } = setup({ className: "sample" });

    expect(container.firstChild).toMatchSnapshot();
  });
});

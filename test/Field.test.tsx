import * as React from "react";
import { render } from "@testing-library/react";
import { Field, FieldProps } from "../src";
import { itBehavesLikeAField } from "./sharedExamples";

const setup = (props: Partial<FieldProps> = {}) =>
  render(
    <Field
      label="Jawn"
      render={(inputProps) => <input {...inputProps} />}
      {...props}
    />
  );

describe("<Field />", () => {
  itBehavesLikeAField(setup);

  it("accepts a passed className", () => {
    const { container } = setup({ className: "sample" });

    expect(container.firstChild).toMatchSnapshot();
  });
});

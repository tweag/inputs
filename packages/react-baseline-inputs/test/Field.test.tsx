import * as React from "react";
import { render } from "@testing-library/react";
import { Field, FieldProps } from "../src";

const setup = (props: Partial<FieldProps> = {}) =>
  render(
    <Field
      label="Jawn"
      render={inputProps => <input {...inputProps} />}
      {...props}
    />
  );

describe("<Field />", () => {
  it("renders", () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders without a label", () => {
    const { container } = setup({ label: false });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders without a wrapper", () => {
    const { container } = setup({ label: false, wrapper: false });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with an error", () => {
    const { container } = setup({ error: "Oh no!" });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with help", () => {
    const { container } = setup({ help: "Good luck" });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with success", () => {
    const { container } = setup({ success: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with touched", () => {
    const { container } = setup({ touched: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with a custom ID", () => {
    const { container } = setup({ id: "foo" });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with large", () => {
    const { container } = setup({ large: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with small", () => {
    const { container } = setup({ small: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with inline", () => {
    const { container } = setup({ inline: true });
    expect(container.firstChild).toMatchSnapshot();
  });
});

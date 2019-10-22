import { FieldInputProps } from "../src";
import { axe, toHaveNoViolations } from "jest-axe";
import { RenderResult } from "@testing-library/react";

expect.extend(toHaveNoViolations);

type FieldSetup = (props?: Partial<FieldInputProps>) => RenderResult;

/**
 * A set of common shared tests for a field.
 */
export const itBehavesLikeAField = (setup: FieldSetup) => {
  it("renders", async () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders without a label", () => {
    const { container } = setup({ label: false });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders without a wrapper", async () => {
    const { container } = setup({ wrapper: false });
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders with an error", async () => {
    const { container } = setup({ error: "Oh no!" });
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders with help", async () => {
    const { container } = setup({ help: "Good luck" });
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders with success", async () => {
    const { container } = setup({ success: true });
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders with touched", async () => {
    const { container } = setup({ touched: true });
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders with a custom ID", async () => {
    const { container } = setup({ id: "foo" });
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders with large", async () => {
    const { container } = setup({ large: true });
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders with small", async () => {
    const { container } = setup({ small: true });
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders with inline", async () => {
    const { container } = setup({ inline: true });
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });
};

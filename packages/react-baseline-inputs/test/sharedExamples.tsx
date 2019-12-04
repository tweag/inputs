import React from "react";
import { FieldInputProps, RadioGroupProps, FieldSetProps } from "../src";
import { axe, toHaveNoViolations } from "jest-axe";
import { RenderResult } from "@testing-library/react";

expect.extend(toHaveNoViolations);

type FieldSetup = (props?: Partial<FieldInputProps>) => RenderResult;
type RadioGroupSetup = (props?: Partial<RadioGroupProps>) => RenderResult;
type FieldSetSetup = (props?: Partial<FieldSetProps>) => RenderResult;

/**
 * A set of common shared tests for a field.
 */
export const itBehavesLikeAField = (
  setup: FieldSetup | RadioGroupSetup | FieldSetSetup,
  excludeTests: Array<"label" | "wrapper" | "id" | "inline" | "required"> = []
) => {
  it("renders", async () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
    expect(await axe(container)).toHaveNoViolations();
  });

  if (!excludeTests.includes("label")) {
    it("renders without a label", () => {
      const { container } = setup({ label: false });
      expect(container.firstChild).toMatchSnapshot();
    });
  }

  if (!excludeTests.includes("wrapper")) {
    it("renders without a wrapper", async () => {
      const { container } = setup({ wrapper: false });
      expect(container.firstChild).toMatchSnapshot();
      expect(await axe(container)).toHaveNoViolations();
    });
  }

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

  if (!excludeTests.includes("id")) {
    it("renders with a custom ID", async () => {
      const { container } = setup({ id: "foo" });
      expect(container.firstChild).toMatchSnapshot();
      expect(await axe(container)).toHaveNoViolations();
    });
  }

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

  if (!excludeTests.includes("required")) {
    it("renders with required", async () => {
      const { container } = setup({ required: true });
      expect(container.firstChild).toMatchSnapshot();
      expect(await axe(container)).toHaveNoViolations();
    });

    it("renders with renderRequired", async () => {
      const { container } = setup({
        renderRequired: ({ className }) => (
          <span className={className}>required</span>
        )
      });
      expect(container.firstChild).toMatchSnapshot();
      expect(await axe(container)).toHaveNoViolations();
    });
  }

  if (!excludeTests.includes("inline")) {
    it("renders with inline", async () => {
      const { container } = setup({ inline: true });
      expect(container.firstChild).toMatchSnapshot();
      expect(await axe(container)).toHaveNoViolations();
    });
  }
};

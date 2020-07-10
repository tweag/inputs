import * as React from "react";
import { Item, ItemProps, Group, GroupProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { itBehavesLikeAField } from "./sharedExamples";

function setup(group: Partial<GroupProps> = {}, item: Partial<ItemProps> = {}) {
  return render(
    <Group type="checkbox" {...group}>
      <Item value={1} {...item} />
    </Group>
  );
}

describe("<Item />", () => {
  describe("checkbox", () => {
    itBehavesLikeAField(props => setup({ type: "checkbox" }, props));

    it("has a value", () => {
      const field = setup(
        { value: [{ foo: "bar" }] },
        { value: { foo: "bar" } }
      );

      const input = field.getByRole("checkbox");
      expect(input).toBeChecked();
      expect(input).toHaveAttribute("value", "");
    });

    it("renders value it's possible", () => {
      const field = setup({ value: [1] }, { value: 1 });
      const input = field.getByRole("checkbox");
      expect(input).toBeChecked();
      expect(input).toHaveAttribute("value", "1");
    });

    it("adds an item `onChangeValue`", () => {
      const onChangeValue = jest.fn();
      const field = setup({ value: [1], onChangeValue }, { value: 2 });
      const input = field.getByRole("checkbox");

      fireEvent.click(input);
      expect(onChangeValue).toHaveBeenCalledWith([1, 2]);
    });

    it("removes an item `onChangeValue`", () => {
      const onChangeValue = jest.fn();
      const field = setup({ value: [1, 2], onChangeValue }, { value: 1 });
      const input = field.getByRole("checkbox");

      fireEvent.click(input);
      expect(onChangeValue).toHaveBeenCalledWith([2]);
    });
  });

  describe("radio", () => {
    itBehavesLikeAField(props => setup({ type: "radio" }, props));

    it("has a value", () => {
      const field = setup(
        { type: "radio", value: { foo: "bar" } },
        { value: { foo: "bar" } }
      );

      const input = field.getByRole("radio");
      expect(input).toBeChecked();
      expect(input).toHaveAttribute("value", "");
    });

    it("renders value it's possible", () => {
      const field = setup({ type: "radio", value: 1 }, { value: 1 });
      const input = field.getByRole("radio");
      expect(input).toBeChecked();
      expect(input).toHaveAttribute("value", "1");
    });

    it("emits `onChangeValue`", () => {
      const onChangeValue = jest.fn();
      const field = setup(
        { type: "radio", value: 1, onChangeValue },
        { value: 2 }
      );
      const input = field.getByRole("radio");

      fireEvent.click(input);
      expect(onChangeValue).toHaveBeenCalledWith(2);
    });
  });
});

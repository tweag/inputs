import * as React from "react";
import { render } from "@testing-library/react";
import { useComponentId } from "../src/useComponentId";

jest.unmock("../src/useComponentId");

function Fixture() {
  const id = useComponentId();
  return <span>{id}</span>;
}

test("useComponentId", () => {
  const one = render(<Fixture />);
  expect(one.container).toHaveTextContent("1");
  one.rerender(<Fixture />);
  one.rerender(<Fixture />);
  expect(one.container).toHaveTextContent("1");

  const two = render(<Fixture />);
  expect(two.container).toHaveTextContent("2");
  two.rerender(<Fixture />);
  two.rerender(<Fixture />);
  expect(two.container).toHaveTextContent("2");
});

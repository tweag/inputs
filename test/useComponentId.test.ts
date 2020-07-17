import { renderHook } from "@testing-library/react-hooks";
import { useComponentId } from "../src/useComponentId";

jest.unmock("../src/useComponentId");

test("useComponentId", () => {
  const one = renderHook(useComponentId);
  expect(one.result.current).toEqual(1);
  one.rerender();
  one.rerender();
  expect(one.result.current).toEqual(1);

  const two = renderHook(useComponentId);
  expect(two.result.current).toEqual(2);
  two.rerender();
  two.rerender();
  expect(two.result.current).toEqual(2);
});

import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

/**
 * Don't increment component ID in tests
 */
jest.mock("../src/useComponentId", () => ({
  useComponentId: () => 1
}));

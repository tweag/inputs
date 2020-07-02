import * as React from "react";

const generate: () => number = (() => {
  let previousId = 0;
  return () => ++previousId;
})();

export const useComponentId = (): number => {
  return React.useMemo(generate, []);
};

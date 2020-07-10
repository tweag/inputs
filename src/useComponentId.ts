import * as React from "react";
import { isUndefined } from "./utilities";

const generate: () => number = (() => {
  let previousId = 0;
  return () => ++previousId;
})();

export const useComponentId = (): number => {
  const ref = React.useRef<number>();

  if (isUndefined(ref.current)) {
    ref.current = generate();
  }

  return ref.current;
};

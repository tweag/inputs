import * as React from "react";

const generateUniqueId = (() => {
  let previousId = 0;
  return () => {
    const id = ++previousId;
    return `field_${id}`;
  };
})();

export const useUniqueId = (id?: string) => {
  const componentId = React.useMemo(generateUniqueId, []);
  return id || componentId;
};

export const join = (names: Array<string | undefined>) => {
  let name = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i]) {
      name += name ? ` ${names[i]}` : names[i];
    }
  }
  return name;
};

export const generateUniqueId = (() => {
  let previousId = 0;
  return () => {
    const id = ++previousId;
    return `field_${id}`;
  };
})();

// This is ugly, but performance is important here.
export const join = (names: Array<string | undefined>) => {
  let name = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i]) {
      name += name ? ` ${names[i]}` : names[i];
    }
  }
  return name;
};

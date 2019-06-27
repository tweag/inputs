import React, { useState } from "react";

const serialize = value => {
  if (value instanceof File) {
    return JSON.stringify(value.name);
  }

  if (value instanceof FileList) {
    return JSON.stringify(Array.from(value).map(file => file.name));
  }

  return JSON.stringify(value);
};

export const Field = ({ initialValue, children }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      {children(value, setValue)}
      <pre><code>VALUE: {serialize(value)}</code></pre>
    </div>
  );
};

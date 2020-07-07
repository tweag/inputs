function pad(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

function assert(test: any, type: string, value: any): asserts test {
  if (!test) {
    throw new Error(`Unable to convert ${JSON.stringify(value)} to ${type}`);
  }
}

export const formatNumber = (value: number): string => {
  assert(!isNaN(value), "number", value);
  return value.toString();
};

export const parseNumber = (value: string): number => {
  const parsed = parseFloat(value);
  assert(!isNaN(parsed), "number", value);
  return parsed;
};

export const formatTime = (value: string, date: Date = new Date()): string => {
  const [h, m] = value
    .replace(/Z$/, "")
    .split(":")
    .map(parseFloat);

  assert(!isNaN(h), "time", value);
  assert(!isNaN(m), "time", value);

  date.setUTCHours(h);
  date.setUTCMinutes(m);

  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

export const parseTime = (value: string, date: Date = new Date()): string => {
  const [h, m] = value.split(":").map(parseFloat);

  assert(!isNaN(h), "time", value);
  assert(!isNaN(m), "time", value);

  date.setHours(h);
  date.setMinutes(m);

  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}Z`;
};

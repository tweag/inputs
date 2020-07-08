function pad(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

function assert(test: any, type: string, value: any): asserts test {
  if (!test) {
    throw new Error(`Unable to convert ${JSON.stringify(value)} to ${type}`);
  }
}

export function formatNumber(value: number): string {
  assert(!isNaN(value), "number", value);
  return value.toString();
}

export function parseNumber(value: string): number {
  const parsed = parseFloat(value);
  assert(!isNaN(parsed), "number", value);
  return parsed;
}

export function formatTime(value: string, date: Date = new Date()): string {
  const match = value.match(/^(\d{2}):(\d{2})Z$/);
  assert(match, "time", value);

  const hours = Number(match[1]);
  assert(hours < 24, "time", value);

  const minutes = Number(match[2]);
  assert(minutes < 60, "time", value);

  date.setUTCHours(hours);
  date.setUTCMinutes(minutes);

  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function parseTime(value: string, date: Date = new Date()): string {
  const match = value.match(/^(\d{2}):(\d{2})$/);
  assert(match, "time", value);

  const hours = Number(match[1]);
  assert(hours < 24, "time", value);

  const minutes = Number(match[2]);
  assert(minutes < 60, "time", value);

  date.setHours(hours);
  date.setMinutes(minutes);

  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}Z`;
}

export function parseDateTime(value: string): string {
  const date = new Date(value);
  assert(!isNaN(date.valueOf()), "datetime", value);
  return date.toISOString();
}

export function formatDateTime(value: string): string {
  const date = new Date(value);
  assert(!isNaN(date.valueOf()), "datetime", value);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}-${pad(month)}-${pad(day)}T${pad(hours)}:${pad(minutes)}`;
}

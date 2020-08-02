function pad(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

function assert(test: any, type: string, value: any): asserts test {
  if (!test) {
    throw new Error(`Unable to convert ${JSON.stringify(value)} to ${type}`);
  }
}

/**
 * Convert a number to a string
 */
export function formatNumber(value: number): string {
  assert(!isNaN(value), "number", value);
  return value.toString();
}

/**
 * Convert a string to number
 */
export function parseNumber(value: string): number | undefined {
  const number = parseFloat(value);
  if (isNaN(number)) return;
  return number;
}

/**
 * Convert the value from an `input[type=time]` to an ISO-8601 time (UTC).
 */
export function parseTime(
  value: string,
  date: Date = new Date()
): string | undefined {
  const match = value.match(/^(\d{2}):(\d{2})$/);
  if (!match) return;

  const hours = Number(match[1]);
  if (hours > 23) return;

  const minutes = Number(match[2]);
  if (minutes > 59) return;

  date.setHours(hours);
  date.setMinutes(minutes);

  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}Z`;
}

/**
 * Convert an ISO-8601 time (UTC) to the format expected by `input[type=time]`.
 */
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

/**
 * Convert the value from an `input[type=datetime-local]` to an ISO-8601 datetime (UTC).
 */
export function parseDateTime(value: string): string | undefined {
  const date = new Date(value);
  if (isNaN(date.valueOf())) return;
  return date.toISOString();
}

/**
 * Convert an ISO-8601 datetime (UTC) to the format expected by `input[type=datetime-local]`.
 */
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

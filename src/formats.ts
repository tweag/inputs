export interface Formatter<T> {
  format(value: T): string;
  parse(value: string): T | null;
}

const pad = (value: number): string => {
  return (value < 10 ? "0" : "") + value;
};

export const dateFormat: Formatter<string> = {
  format(value) {
    return value;
  },
  parse(value) {
    const date = new Date(value);
    const isValid = !isNaN(date.getTime());
    return isValid ? value : null;
  }
};

export const timeFormat: Formatter<string> = {
  format(value) {
    const [hours, minutes] = value
      .replace(/Z$/, "")
      .split(":")
      .map(Number);

    const date = new Date();
    date.setUTCHours(hours);
    date.setUTCMinutes(minutes);

    const localHours = pad(date.getHours());
    const localMinutes = pad(date.getMinutes());
    return `${localHours}:${localMinutes}`;
  },
  parse(value) {
    const [hours, minutes] = value.split(":").map(Number);

    if (isNaN(hours) || isNaN(minutes)) {
      return null;
    }

    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    const utcHours = pad(date.getUTCHours());
    const utcMinutes = pad(date.getUTCMinutes());
    return `${utcHours}:${utcMinutes}Z`;
  }
};

export const dateTimeFormat: Formatter<string> = {
  format(value) {
    return value.substring(0, 16);
  },
  parse(value) {
    const date = new Date(`${value}:00.000Z`);
    const isValid = !isNaN(date.getTime());
    return isValid ? date.toISOString() : null;
  }
};

export const integerFormat: Formatter<number> = {
  format(value) {
    return value.toString();
  },
  parse(value) {
    const number = parseInt(value, 10);
    return isNaN(number) ? null : number;
  }
};

export const floatFormat: Formatter<number> = {
  format(value) {
    return value.toString();
  },
  parse(value) {
    const number = parseFloat(value);
    return isNaN(number) ? null : number;
  }
};

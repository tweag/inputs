import {
  formatDateTime,
  formatNumber,
  formatTime,
  isValidDateTime,
  isValidNumber,
  isValidTime,
  parseDateTime,
  parseNumber,
  parseTime
} from "../src";

describe("number", () => {
  describe("isValidNumber", () => {
    test("accepts valid values", () => {
      expect(isValidNumber("1")).toEqual(true);
    });

    test("rejects invalid values", () => {
      expect(isValidNumber("")).toEqual(false);
    });
  });

  describe("formatNumber", () => {
    test("converts a number to a string", () => {
      expect(formatNumber(0)).toEqual("0");
    });

    test("rejects invalid values", () => {
      expect(() => formatNumber(NaN)).toThrow(/Unable to convert/);
    });
  });

  describe("parseNumber", () => {
    test("converts a number to a string", () => {
      expect(parseNumber("0")).toEqual(0);
    });

    test("rejects invalid values", () => {
      expect(() => parseNumber("")).toThrow(/Unable to convert/);
    });
  });
});

describe("time", () => {
  const today = new Date("July 8, 2020");

  describe("isValidTime", () => {
    test("accepts valid values", () => {
      expect(isValidTime("08:00")).toEqual(true);
    });

    test("rejects invalid values", () => {
      expect(isValidTime("")).toEqual(false);
      expect(isValidTime(":")).toEqual(false);
      expect(isValidTime("8:8")).toEqual(false);
      expect(isValidTime("25:00")).toEqual(false);
      expect(isValidTime("11:61")).toEqual(false);
    });
  });

  describe("formatTime", () => {
    test("converts UTC to local", () => {
      expect(formatTime("08:28Z", today)).toEqual("04:28");
    });

    test("rejects invalid values", () => {
      expect(() => formatTime("", today)).toThrow(/Unable to convert/);
    });

    test("rejects out of range", () => {
      expect(() => formatTime("25:99Z", today)).toThrow(/Unable to convert/);
    });
  });

  describe("parseTime", () => {
    test("converts local to UTC", () => {
      expect(parseTime("04:28", today)).toEqual("08:28Z");
    });

    test("rejects invalid values", () => {
      expect(() => parseTime("", today)).toThrow(/Unable to convert/);
    });

    test("rejects out of range", () => {
      expect(() => formatTime("25:99", today)).toThrow(/Unable to convert/);
    });
  });
});

describe("datetime-local", () => {
  const localValue = "2020-07-08T12:30";
  const utcValue = "2020-07-08T16:30:00.000Z";

  describe("isValidTime", () => {
    test("accepts valid values", () => {
      expect(isValidDateTime(localValue)).toEqual(true);
    });

    test("rejects invalid values", () => {
      expect(isValidDateTime("")).toEqual(false);
      expect(isValidDateTime(":")).toEqual(false);
      expect(isValidDateTime("abc")).toEqual(false);
    });
  });

  describe("parseDateTime", () => {
    test("converts UTC to local", () => {
      expect(parseDateTime(localValue)).toEqual(utcValue);
    });

    test("rejects invalid values", () => {
      expect(() => parseDateTime("abc")).toThrow(/Unable to convert/);
    });
  });

  describe("formatDateTime", () => {
    test("converts local to UTC", () => {
      expect(formatDateTime(utcValue)).toEqual(localValue);
    });

    test("rejects invalid values", () => {
      expect(() => formatDateTime("abc")).toThrow(/Unable to convert/);
    });
  });
});

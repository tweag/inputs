import {
  formatDateTime,
  formatNumber,
  formatTime,
  parseDateTime,
  parseNumber,
  parseTime
} from "../src";

describe("number", () => {
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
      expect(parseNumber("")).toBeUndefined();
    });
  });
});

describe("time", () => {
  const today = new Date("July 8, 2020");

  describe("formatTime", () => {
    test("converts UTC to local", () => {
      expect(formatTime("08:28:00Z", today)).toEqual("04:28");
    });

    test("rejects invalid values", () => {
      expect(() => formatTime("", today)).toThrow(/Unable to convert/);
    });

    test("rejects out of range", () => {
      expect(() => formatTime("25:99:00Z", today)).toThrow(/Unable to convert/);
    });
  });

  describe("parseTime", () => {
    test("converts local to UTC", () => {
      expect(parseTime("04:28", today)).toEqual("08:28:00Z");
    });

    test("rejects invalid values", () => {
      expect(parseTime("", today)).toBeUndefined();
    });

    test("rejects out of range", () => {
      expect(parseTime("25:99", today)).toBeUndefined();
    });
  });
});

describe("datetime-local", () => {
  const localValue = "2020-07-08T12:30";
  const utcValue = "2020-07-08T16:30:00.000Z";

  describe("parseDateTime", () => {
    test("converts UTC to local", () => {
      expect(parseDateTime(localValue)).toEqual(utcValue);
    });

    test("rejects invalid values", () => {
      expect(parseDateTime("abc")).toBeUndefined();
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

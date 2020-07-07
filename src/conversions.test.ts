import { formatTime, parseTime } from "./conversions";

const edt = new Date("July 7, 2020 EDT");
const est = new Date("March 7, 2020 EST");

describe("formatTime", () => {
  test("converts UTC to EDT", () => {
    expect(formatTime("08:28Z", edt)).toEqual("04:28");
  });

  test("converts UTC to EST", () => {
    expect(formatTime("08:28Z", est)).toEqual("03:28");
  });

  test("rejects invalid values", () => {
    expect(() => formatTime("", est)).toThrow(/Unable to convert/);
  });
});

describe("parseTime", () => {
  test("converts EDT to UTC", () => {
    expect(parseTime("04:28", edt)).toEqual("08:28Z");
  });

  test("converts EST to UTC", () => {
    expect(parseTime("04:28", est)).toEqual("09:28Z");
  });

  test("rejects invalid values", () => {
    expect(() => parseTime("", est)).toThrow(/Unable to convert/);
  });
});

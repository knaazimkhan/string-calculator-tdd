import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("returns 0 when input is an empty string", () => {
    expect(add("")).toBe(0);
  });
});

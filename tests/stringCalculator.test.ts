import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("returns 0 when input is an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number when input is a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two numbers when input is two numbers separated by a comma", () => {
    expect(add("1,2")).toBe(3);
  });

});

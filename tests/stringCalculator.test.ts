import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("returns 0 when input is an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number when input is a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two numbers when input is two numbers separated by a comma", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("handles new lines as delimiters alongside commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  

});

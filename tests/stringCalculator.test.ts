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

  test("supports custom delimiters defined at the start of the string", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws an exception when a negative number is included", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  test("throws an exception showing all negative numbers", () => {
    expect(() => add("1,-2,-3,4")).toThrow(
      "negative numbers not allowed: -2, -3"
    );
  });

  test("ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,3")).toBe(1003);
  });

  test("supports custom delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[###]\n4###5###6")).toBe(15);
  });
  
  
});

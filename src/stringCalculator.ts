export const add = (numbers: string): number => {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;

  const customDelimiterMatch = numbers.match(/^\/\/(\[.*\]|.)\n/);

  if (customDelimiterMatch) {
    const delimiterPart = customDelimiterMatch[1];

    if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
      const delimiters = [...delimiterPart.matchAll(/\[(.*?)\]/g)].map(
        (m) => m[1]
      );
      const escapedDelimiters = delimiters.map((d) =>
        d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      );
      delimiter = new RegExp(escapedDelimiters.join("|"));
    } else delimiter = new RegExp(delimiterPart);

    numbers = numbers.slice(customDelimiterMatch[0].length);
  }

  const numbersArray = numbers
    .split(delimiter)
    .map((number) => parseInt(number.trim(), 10))
    .filter((number) => number <= 1000);

  const negativeNumbers = numbersArray.filter((number) => number < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numbersArray.reduce((acc, number) => acc + number, 0);
};
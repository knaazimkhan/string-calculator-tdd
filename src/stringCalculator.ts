export const add = (numbers: string): number => {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;

  const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

  if (customDelimiterMatch) {
    delimiter = new RegExp(customDelimiterMatch[1]);
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

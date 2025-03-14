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
    .map((number) => parseInt(number.trim(), 10));

  return numbersArray.reduce((acc, number) => acc + number, 0);  
};

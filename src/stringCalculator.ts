export const add = (numbers: string): number => {
  if (numbers === "") return 0;

  if (numbers.includes(",")) {
    const numbersArray = numbers
      .split(/[\n,]/)
      .map((number) => parseInt(number.trim(), 10));
    return numbersArray.reduce((acc, number) => acc + number, 0);
  }

  return parseInt(numbers, 10);
};

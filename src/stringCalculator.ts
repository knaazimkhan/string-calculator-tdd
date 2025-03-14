export const add = (numbers: string): number => {
  if (numbers === "") return 0;

  if (numbers.includes(",")) {
    const [firstNumber, secondNumber] = numbers.split(",");
    return parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
  }

  return parseInt(numbers, 10);
};

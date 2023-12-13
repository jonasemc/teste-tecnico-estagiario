export const sumPairNumbers = (numbers) => {
  const pairNumbers = numbers.filter((number) => number % 2 === 0);
  const sumNumbers = pairNumbers.reduce((sum, number) => sum + number, 0);
  return { pairNumbers, sumNumbers };
};

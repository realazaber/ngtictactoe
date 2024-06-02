export function randomChoice(limit: number): number {
  const randomDecimal = Math.random();

  const randomNumber = randomDecimal * limit;

  return Math.floor(randomNumber);
}

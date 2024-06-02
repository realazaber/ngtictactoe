import { IOption } from '../models/option';

export function checkWin(userToken: IOption, spots: IOption[]): boolean {
  const winConditions: number[][] = [
    //Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //Cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  let result: boolean = false;
  winConditions.forEach((row: number[]) => {
    if (allTheSame(userToken, [spots[row[0]], spots[row[1]], spots[row[2]]])) {
      result = true;
    }
  });

  return result;
}

export function allTheSame(userToken: IOption, spots: IOption[]): boolean {
  if (new Set(spots).size == 1) {
    if (spots[0] == userToken) {
      return true;
    }
  }
  return false;
}

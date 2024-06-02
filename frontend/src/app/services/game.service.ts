import { Injectable } from '@angular/core';
import { IGameData } from '../models/gameData';
import { IOption } from '../models/option';
import { checkWin } from '../utility/winscenarios';
import { randomChoice } from '../utility/randomchoice';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  key: string = 'ngtictactoe';

  constructor() {}

  generateGame(): IGameData {
    return {
      id: 1,
      started: false,
      spots: [
        IOption.Nill,
        IOption.Nill,
        IOption.Nill,
        IOption.Nill,
        IOption.Nill,
        IOption.Nill,
        IOption.Nill,
        IOption.Nill,
        IOption.Nill,
      ],
    };
  }

  throwGame(): void {
    localStorage.removeItem(this.key);
  }

  saveGame(gameData: IGameData): void {
    localStorage.setItem(this.key, JSON.stringify(gameData));
  }

  getGame(): IGameData {
    return JSON.parse(localStorage.getItem(this.key));
  }

  computerChoose(gameData: IGameData): IGameData {
    let choiceMade: boolean = false;

    while (!choiceMade) {
      let choice: number = randomChoice(gameData.spots.length);
      if (gameData.spots[choice] == IOption.Nill) {
        gameData.spots[choice] = IOption.Computer;
        choiceMade = true;
      }
    }

    return gameData;
  }

  checkWinner(userToken: IOption, spots: IOption[]): boolean {
    return checkWin(userToken, spots);
  }

  isDraw(spots: IOption[]): boolean {
    let result: boolean = true;
    //Make sure there are not more valid moves.
    spots.forEach((spot: IOption) => {
      if (spot == 0) {
        result = false;
      }
    });

    //Check if anyone already won.
    if (checkWin(IOption.Player, spots) == true) {
      result = false;
    }
    if (checkWin(IOption.Computer, spots) == true) {
      result = false;
    }

    return result;
  }
}

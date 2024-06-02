import { TestBed } from '@angular/core/testing';
import { IGameData } from '../../models/gameData';
import { GameService } from '../../services/game.service';
import { IOption } from '../../models/option';

describe('Computer Win Scenario rows', () => {
  let gameService: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gameService = TestBed.inject(GameService);
  });

  it('Computer Diagonal left to right win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Computer,
        IOption.Player,
        IOption.Computer,

        IOption.Player,
        IOption.Computer,
        IOption.Player,

        IOption.Player,
        IOption.Nill,
        IOption.Computer,
      ],
    };
    expect(gameService.checkWinner(IOption.Computer, board.spots)).toBeTruthy();
  });
  it('Computer Diagonal right to left   win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Player,
        IOption.Nill,
        IOption.Computer,

        IOption.Nill,
        IOption.Computer,
        IOption.Player,

        IOption.Computer,
        IOption.Player,
        IOption.Nill,
      ],
    };
    expect(gameService.checkWinner(IOption.Computer, board.spots)).toBeTruthy();
  });
});

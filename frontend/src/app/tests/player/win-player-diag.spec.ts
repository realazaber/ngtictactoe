import { TestBed } from '@angular/core/testing';
import { IGameData } from '../../models/gameData';
import { GameService } from '../../services/game.service';
import { IOption } from '../../models/option';

describe('Player Win Scenario diagonal', () => {
  let gameService: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gameService = TestBed.inject(GameService);
  });

  it('Player Diagonal left to right win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Player,
        IOption.Computer,
        IOption.Player,

        IOption.Computer,
        IOption.Player,
        IOption.Computer,

        IOption.Computer,
        IOption.Nill,
        IOption.Player,
      ],
    };
    expect(gameService.checkWinner(IOption.Player, board.spots)).toBeTruthy();
  });
  it('Player Diagonal right to left   win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Computer,
        IOption.Nill,
        IOption.Player,

        IOption.Nill,
        IOption.Player,
        IOption.Computer,

        IOption.Player,
        IOption.Computer,
        IOption.Nill,
      ],
    };
    expect(gameService.checkWinner(IOption.Player, board.spots)).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { IGameData } from '../../models/gameData';
import { GameService } from '../../services/game.service';
import { IOption } from '../../models/option';

describe('Player Win Scenario cols', () => {
  let gameService: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gameService = TestBed.inject(GameService);
  });

  it('Player col 1 win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Player,
        IOption.Computer,
        IOption.Nill,

        IOption.Player,
        IOption.Nill,
        IOption.Computer,

        IOption.Player,
        IOption.Player,
        IOption.Nill,
      ],
    };
    expect(gameService.checkWinner(IOption.Player, board.spots)).toBeTruthy();
  });
  it('Player col 2 win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Computer,
        IOption.Player,
        IOption.Nill,
        IOption.Nill,
        IOption.Player,
        IOption.Computer,
        IOption.Nill,
        IOption.Player,
        IOption.Nill,
      ],
    };
    expect(gameService.checkWinner(IOption.Player, board.spots)).toBeTruthy();
  });
  it('Player col 3 win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Computer,
        IOption.Player,
        IOption.Player,
        IOption.Nill,
        IOption.Computer,
        IOption.Player,
        IOption.Nill,
        IOption.Player,
        IOption.Player,
      ],
    };
    expect(gameService.checkWinner(IOption.Player, board.spots)).toBeTruthy();
  });
});

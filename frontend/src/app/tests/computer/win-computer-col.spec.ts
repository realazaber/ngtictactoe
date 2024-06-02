import { TestBed } from '@angular/core/testing';
import { IGameData } from '../../models/gameData';
import { GameService } from '../../services/game.service';
import { IOption } from '../../models/option';

describe('Computer Win Scenario cols', () => {
  let gameService: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gameService = TestBed.inject(GameService);
  });

  it('Computer col 1 win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Computer,
        IOption.Player,
        IOption.Nill,

        IOption.Computer,
        IOption.Nill,
        IOption.Player,

        IOption.Computer,
        IOption.Computer,
        IOption.Nill,
      ],
    };
    expect(gameService.checkWinner(IOption.Computer, board.spots)).toBeTruthy();
  });
  it('Computer col 2 win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Player,
        IOption.Computer,
        IOption.Nill,
        IOption.Nill,
        IOption.Computer,
        IOption.Player,
        IOption.Nill,
        IOption.Computer,
        IOption.Nill,
      ],
    };
    expect(gameService.checkWinner(IOption.Computer, board.spots)).toBeTruthy();
  });
  it('Computer col 3 win', () => {
    const board: IGameData = {
      id: 1,
      started: true,
      spots: [
        IOption.Player,
        IOption.Computer,
        IOption.Computer,
        IOption.Nill,
        IOption.Player,
        IOption.Computer,
        IOption.Nill,
        IOption.Computer,
        IOption.Computer,
      ],
    };
    expect(gameService.checkWinner(IOption.Computer, board.spots)).toBeTruthy();
  });
});

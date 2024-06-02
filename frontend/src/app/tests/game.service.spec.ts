import { TestBed } from '@angular/core/testing';
import { GameService } from '../services/game.service';
import { IGameData } from '../models/gameData';
import { IOption } from '../models/option';

describe('GameService', () => {
  let gameService: GameService;

  beforeEach(() => {
    TestBed.configureCompiler({});
    gameService = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(gameService).toBeTruthy();
  });

  it('Draw: No empty spots and no winner in any row, column, or diagonal', () => {
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
        IOption.Player,
        IOption.Computer,
      ],
    };
    expect(gameService.isDraw(board.spots)).toBeTruthy();
  });
});

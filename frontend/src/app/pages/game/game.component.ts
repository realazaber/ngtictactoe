import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { IOption } from '../../models/option';
import { IGameData } from '../../models/gameData';
import { ContainerComponent } from '../../components/utility/container/container.component';
import { ButtonComponent } from '../../components/utility/button/button.component';
import { MessagePanelComponent } from '../../components/message-panel/message-panel.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent, MessagePanelComponent],
  templateUrl: './game.component.html',
  styles: ``,
})
export class GameComponent implements OnInit {
  gameData: IGameData;
  activated: boolean = true;
  ended: boolean = false;
  turn: IOption = IOption.Player;
  canStart: boolean;
  canThrow: boolean;
  msgPanelTxt: string = 'Next turn: X';

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameData = this.gameService.getGame();
    if (this.gameData == null) {
      this.gameData = this.gameService.generateGame();
      this.ended = true;
      this.activated = true;
      this.turn = IOption.Player;
    }
    if (this.ended) {
      this.canThrow = false;
      this.canStart = true;
      return;
    } else {
      this.canThrow = true;
      this.canStart = false;
      return;
    }
  }

  startGame(): void {
    this.gameData.started = true;
    this.ended = false;
    this.gameService.throwGame();
    this.gameData.spots = this.gameService.generateGame().spots;

    this.activated = true;
    this.msgPanelTxt = 'Next turn: X';
    this.canStart = false;
    this.canThrow = true;
    this.turn = IOption.Player;
  }

  handleClick(slot: number): void {
    //update game

    if (!this.gameData.started) {
      alert('Please start game.');
      return;
    }

    if (this.turn != IOption.Player) {
      alert('Not your turn');
      return;
    }

    if (this.ended) {
      alert('Game has already finished, please start new game.');
      return;
    }

    if (!this.activated) {
      alert('Not activatd');
      return;
    }
    this.gameData.spots[slot] = IOption.Player;
    this.refreshGame();
    //check for draw
    if (this.gameService.isDraw(this.gameData.spots)) {
      this.activated = false;
      this.ended = true;
      this.turn = IOption.Nill;
      this.msgPanelTxt = 'Its a tie!';
      return;
    }
    //check for player
    if (
      this.gameService.checkWinner(
        IOption.Player,
        this.gameService.getGame().spots
      )
    ) {
      this.activated = false;
      this.ended = true;
      this.canStart = true;
      this.canThrow = false;
      this.msgPanelTxt = 'Congrats, you won!';
      return;
      //if winner show and delete save and reset game
    }
    this.turn = IOption.Computer;
    this.msgPanelTxt = 'Next turn: O';
    this.gameData = this.gameService.computerChoose(this.gameData);
    this.refreshGame();

    if (
      this.gameService.checkWinner(
        IOption.Computer,
        this.gameService.getGame().spots
      )
    ) {
      this.activated = false;
      this.ended = true;
      this.canStart = true;
      this.canThrow = false;
      this.msgPanelTxt = 'You lost';
      return;
    } else {
      //else continue

      this.msgPanelTxt = 'Next move: X';
      this.turn = IOption.Player;
      this.refreshGame();
    }
  }

  throwGame(): void {
    if (!this.gameData.started) {
      return;
    }

    this.canStart = true;
    this.canThrow = false;

    this.gameData = this.gameService.generateGame();
    this.ended = false;
    this.turn = IOption.Nill;
    this.gameService.throwGame();
    if (!this.gameData.started) {
      this.msgPanelTxt = 'Start game';
    } else {
      this.msgPanelTxt = 'Next turn: X';
    }
  }

  refreshGame(): void {
    this.gameService.saveGame(this.gameData);
    this.gameData = this.gameService.getGame();
  }

  wrongInput(message: string): void {
    alert(message);
  }
}

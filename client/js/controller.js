/* global document */
/* global Board */

class Controller {
  init() {
    this.turn = Math.random() < 0.5;
    // if true, it's player1's move
    this.player1 = new Board('player1');
    this.player2 = new Board('player2');
    this.displayTurn();
  }

  displayTurn() {
    const turn = document.getElementById('display-turn');
    let player = 'Player 1';
    if (!this.turn) {
      player = 'Player 2';
    }
    turn.innerHTML = `It's <span class="game__current_player">${player}</span>'s Turn!`;
  }
}

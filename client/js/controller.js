/* global document */
/* global Board */

class Controller {
  constructor() {
    this.turn = Math.random() < 0.5;
    // if true, it's player1's move
    this.player1 = new Board('canvas-grid1');
    this.player2 = new Board('canvas-grid2');
    this.displayTurn();
  }

  displayTurn() {
    const turn = document.getElementById('display-turn');
    let player = 'Player 1';
    if (!this.turn) {
      player = 'Player 2';
    }
    turn.innerHTML = `It's <span class="name">${player}</span>'s Turn!`;
  }
}

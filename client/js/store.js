/* global Player PLAYER1 PLAYER2 */
class Store {
  constructor() {
    this.player1 = new Player('Bob');
    this.player2 = new Player('Charlie');
    this.end = false;
    this.turn = true;
  }

  setTurn(turn) {
    this.turn = turn;
  }

  getCurrentPlayer() {
    if (this.turn) {
      return this.player1.getName();
    }
    return this.player2.getName();
  }
}

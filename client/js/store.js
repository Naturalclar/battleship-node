/* global Player PLAYER1 PLAYER2 */
class Store {
  constructor() {
    this.player1 = new Player('Bob');
    this.player2 = new Player('Charlie');
    this.message = '';
    this.end = false;
    this.turn = true;
  }

  setMessage(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  setTurn(turn) {
    this.turn = turn;
  }

  getTurn() {
    return this.turn;
  }

  getCurrentPlayer() {
    if (this.turn) {
      return this.player1;
    }
    return this.player2;
  }

  clearState() {
    this.player1.clear();
    this.player2.clear();
    this.message = '';
  }
}

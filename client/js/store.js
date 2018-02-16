/* global Player PLAYER1 PLAYER2 */
class Store {
  constructor() {
    this.player = {};
    this.player[PLAYER1] = new Player('Bob');
    this.player[PLAYER2] = new Player('Charlie');
    this.end = false;
    this.turn = true;
  }

  setName(name, id) {
    this.player[id].setName(name);
  }

  getName(id) {
    return this.player[id].getName();
  }

  setTurn(turn) {
    this.turn = turn;
  }

  getCurrentPlayer() {
    if (this.turn) {
      return this.player[PLAYER1].getName();
    }
    return this.player[PLAYER2].getName();
  }
}

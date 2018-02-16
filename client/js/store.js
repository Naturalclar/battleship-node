class Store {
  constructor() {
    this.player1 = 'Bob';
    this.player2 = 'Charlie';
    this.start = false;
    this.end = false;
    this.turn = true;
  }

  setPlayer1(name) {
    this.player1 = name;
  }

  setPlayer2(name) {
    this.player2 = name;
  }

  getPlayer1() {
    return this.player1;
  }

  getPlayer2() {
    return this.player2;
  }

  setTurn(turn) {
    this.turn = turn;
  }

  getCurrentPlayer() {
    if (this.turn) {
      return this.player1;
    }
    return this.player2;
  }
}

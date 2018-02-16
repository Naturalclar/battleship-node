/* global InitialScreen Controller */

class Game {
  constructor(store) {
    this.state = null;
    this.store = store;
    this.el = document.getElementById('app');
  }

  init() {
    this.el.innerHTML = '';
    this.state = new InitialScreen(this.store, this, this.el);
  }

  startGame() {
    this.el.innerHTML = '';
    this.state = new Controller(this.store, this, this.el);
  }
}

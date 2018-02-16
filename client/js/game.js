/* global InitialScreen Controller WinnerScreen */

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

  setWinner(player) {
    this.state = new WinnerScreen(this.store, this, this.el, player);
  }

  reRender() {
    this.el.innerHTML = '';
    this.state.render();
  }
}

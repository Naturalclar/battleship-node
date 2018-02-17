/* global InitialScreen SetUpScreen GameScreen WinnerScreen gameState */

class Game {
  constructor(store) {
    this.state = null;
    this.store = store;
    this.el = document.getElementById('app');
  }

  init() {
    this.store.clearState();
    this.store.setGameState(gameState.INIT);
    this.state = new InitialScreen(this.store, this, this.el);
  }

  startSetUp(player) {
    this.store.setGameState(gameState.SETUP);
    this.state = new SetUpScreen(this.store, this, this.el, player);
  }

  startGame() {
    this.store.setGameState(gameState.PLAY);
    this.state = new GameScreen(this.store, this, this.el);
  }

  setWinner(player) {
    this.store.setGameState(gameState.WIN);
    this.state = new WinnerScreen(this.store, this, this.el, player);
  }

  reRender() {
    this.el.innerHTML = '';
    this.state.render();
  }
}

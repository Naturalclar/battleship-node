/* global */

class SetupScreen {
  constructor(store, game, el, player) {
    this.store = store;
    this.game = game;
    this.el = el;
    this.player = player;
    this.render();
  }

  render() {
    const container = document.createElement('div');
    container.className = 'setUp';
  }
}
/* global */

class SetupScreen {
  constructor(player, game, el) {
    this.game = game;
    this.el = el;
    this.player = player;
    this.render();
  }

  render() {
    const container = document.createElement('div');
    container.className = 'setup';
  }
}
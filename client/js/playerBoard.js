/* global Board */

class PlayerBoard {
  constructor(store, game, player) {
    this.store = store;
    this.game = game;
    this.player = player;
    this.el = document.createElement('div');
    this.el.className = 'game__player';
    this.render();
  }

  getEl() {
    return this.el;
  }

  render() {
    this.el.innerHTML = '';
    const header = document.createElement('h3');
    header.className = 'game__displayname';
    const headerText = document.createTextNode(`${this.player.getName()}'s Board`);
    header.appendChild(headerText);
    const board = new Board(this.store, this.game, this.player);

    this.el.appendChild(header);
    this.el.appendChild(board.getEl());
  }
}

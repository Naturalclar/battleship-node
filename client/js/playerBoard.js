/* global Board */

class PlayerBoard {
  constructor(player) {
    this.el = document.createElement('div');
    this.el.className = 'game__player';
    this.el.innerHTML = '';
    this.player = player;
    this.render();
  }

  getEl() {
    return this.el;
  }

  render() {
    const header = document.createElement('h3');
    const headerText = document.createTextNode(`${this.player.getName()}'s Board`);
    header.appendChild(headerText);
    const board = new Board(this.player);

    this.el.appendChild(header);
    this.el.appendChild(board.getEl());
  }
}

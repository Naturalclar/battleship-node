/* global Board */

class PlayerBoard {
  constructor(name) {
    this.el = document.createElement('div');
    this.el.className = 'game__player';
    this.el.innerHTML = '';
    this.name = name;
    this.render();
  }

  getEl() {
    return this.el;
  }

  render() {
    const header = document.createElement('h3');
    const headerText = document.createTextNode(`${this.name}'s Board`);
    header.appendChild(headerText);
    const board = new Board();

    this.el.appendChild(header);
    this.el.appendChild(board.getEl());
  }
}

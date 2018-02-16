/* global PlayerBoard */

class Controller {
  constructor(store, game, el) {
    this.store = store;
    this.game = game;
    this.el = el;
    this.init();
  }

  init() {
    this.el.innerHTML = '';
    this.store.setTurn(Math.random() < 0.5);
    // if true, it's player1's move
    this.render();
  }

  render() {
    const turn = document.createElement('h2');
    turn.id = 'display-turn';
    const message = document.createElement('p');
    message.id = 'message';
    const container = document.createElement('div');
    container.className = 'game__container';
    const player1 = new PlayerBoard(this.store.player1);
    const player2 = new PlayerBoard(this.store.player2);

    container.appendChild(player1.getEl());
    container.appendChild(player2.getEl());
    const button = document.createElement('button');
    const buttonText = document.createTextNode('Reset Game!');
    button.onclick = () => { this.game.init(); };
    button.appendChild(buttonText);

    this.el.innerHTML = '';
    this.el.appendChild(turn);
    this.el.appendChild(message);
    this.el.appendChild(container);
    this.el.appendChild(button);
    this.displayTurn();
  }

  displayTurn() {
    const turn = document.getElementById('display-turn');
    const player = this.store.getCurrentPlayer();
    turn.innerHTML = `It's <span class="game__current_player">${player}</span>'s Turn!`;
  }
}

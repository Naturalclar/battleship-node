/* global PlayerBoard */

class GameScreen {
  constructor(store, game, el) {
    this.store = store;
    this.game = game;
    this.el = el;
    this.init();
  }

  init() {
    this.store.setTurn(Math.random() < 0.5);
    // if true, it's player1's move
    this.render();
  }

  render() {
    this.el.innerHTML = '';

    // Create Element to display who's turn it is.
    const turn = document.createElement('h2');
    turn.className = 'game__displayname';
    const turnPlayer = this.store.getCurrentPlayer().getName();
    turn.innerHTML = `It's <span class="game__current_player">${turnPlayer}</span>'s Turn!`;

    // Create Element to display game message
    const message = document.createElement('p');
    message.className = 'game__message';
    const messageText = document.createTextNode(this.store.getMessage());
    message.appendChild(messageText);

    // Create Element that contains the game itself
    const container = document.createElement('div');
    container.className = 'game__container';
    const player1 = new PlayerBoard(this.store, this.game, this.store.player1);
    const player2 = new PlayerBoard(this.store, this.game, this.store.player2);
    container.appendChild(player1.getEl());
    container.appendChild(player2.getEl());

    // Create button to reset game
    const button = document.createElement('button');
    const buttonText = document.createTextNode('Reset Game!');
    button.onclick = () => { this.game.init(); };
    button.appendChild(buttonText);

    this.el.appendChild(turn);
    this.el.appendChild(message);
    this.el.appendChild(container);
    this.el.appendChild(button);
  }
}

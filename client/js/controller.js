/* global document */
/* global Player */
/* eslint-disable no-unused-vars */

class Controller {
  init() {
    this.el = document.getElementById('app');
    this.turn = Math.random() < 0.5;
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
    const player1 = new Player('Bob');
    const player2 = new Player('Charlie');


    container.appendChild(player1.getEl());
    container.appendChild(player2.getEl());
    const button = document.createElement('button');
    const buttonText = document.createTextNode('Start Game!');
    button.onclick = () => { this.init(); };
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
    let player = 'Player 1';
    if (!this.turn) {
      player = 'Player 2';
    }
    turn.innerHTML = `It's <span class="game__current_player">${player}</span>'s Turn!`;
  }
}

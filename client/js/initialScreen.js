/* global PLAYER1 PLAYER2 */

class InitialScreen {
  /**
   * InitialScreen
   * - In this screen, you input the participant's name.
   * @param {Store} store
   * Where variables are stored
   * @param {Game} game
   * Game state manager
   * @param {HTMLElement} el
   * Element which the app will be rendered
   */
  constructor(store, game, el) {
    this.store = store;
    this.game = game;
    this.el = el;
    this.el.innerHTML = '';
    this.render();
  }

  /**
   * handleSubmit(e)
   * Store the name of the participant and start the game
   * @param {event} e
   */
  handleSubmit(e) {
    e.preventDefault();
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    this.store.setName(player1.value, PLAYER1);
    this.store.setName(player2.value, PLAYER2);
    this.game.startGame();
  }

  /**
   * render()
   * rendering the InitialScreen
   */
  render() {
    const container = document.createElement('div');
    container.className = 'init';

    // create title
    const title = document.createElement('h1');
    const titleText = document.createTextNode('Simple Battleship');
    title.appendChild(titleText);
    container.appendChild(title);

    // create form
    const form = document.createElement('form');
    form.className = 'init__form';
    form.onsubmit = (e) => { this.handleSubmit(e); };
    container.appendChild(form);

    // create player 1 input form
    const label1 = document.createElement('label');
    const label1Text = document.createTextNode('Player 1: ');
    label1.appendChild(label1Text);
    const input1 = document.createElement('input');
    input1.id = 'player1';
    input1.type = 'text';
    input1.defaultValue = this.store.getName(PLAYER1);
    label1.appendChild(input1);
    form.appendChild(label1);

    // create player 2 input form
    const label2 = document.createElement('label');
    const label2Text = document.createTextNode('Player 2: ');
    label2.appendChild(label2Text);
    const input2 = document.createElement('input');
    input2.id = 'player2';
    input2.type = 'text';
    input2.defaultValue = this.store.getName(PLAYER2);
    label2.appendChild(input2);
    form.appendChild(label2);

    // create game start button
    const button = document.createElement('button');
    const buttonText = document.createTextNode('Start Game!');
    button.appendChild(buttonText);
    form.appendChild(button);

    this.el.appendChild(container);
  }
}

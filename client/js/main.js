/* global window */
/* global Store */
/* global Game */

window.onload = () => {
  const store = new Store();
  const game = new Game(store);
  game.init();
};


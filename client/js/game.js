/* global window */
/* global Controller */
/* global Store */

window.onload = () => {
  const store = new Store();
  const game = new Controller(store);
  game.init();
};


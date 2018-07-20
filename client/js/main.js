/* global window Store Game */

window.onload = () => {
  const store = new Store();
  const game = new Game(store);
  game.init();
};

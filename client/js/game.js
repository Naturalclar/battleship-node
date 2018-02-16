/* global window */
/* global document */
/* global Controller */

window.onload = () => {
  const game = new Controller();
  game.init();

  const startButton = document.getElementById('start');
  startButton.onclick = () => {
    game.init();
  };
};


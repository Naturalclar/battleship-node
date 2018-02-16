/* global window */
/* global Board */
// const Board = require('./board');

window.onload = () => {
  const board1 = new Board('canvas-grid1');
  const board2 = new Board('canvas-grid2');

  board1.drawGrid();
  board2.drawGrid();
};


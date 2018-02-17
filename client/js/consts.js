const SIZE = 10;
const GRID_SIZE = 24;

const gameState = Object.freeze({
  INIT: 0,
  SETUP: 1,
  PLAY: 2,
  WIN: 3,
});

const gridState = Object.freeze({
  EMPTY: 0,
  HIT: 1,
  MISS: 2,
  SUNK: 3,
});

const ships = Object.freeze({
  0: 'EMPTY',
  1: 'CARRIER',
  2: 'BATTLESHIP',
  3: 'CRUISER',
  4: 'SUBMARINE',
  5: 'DESTROYER',
  EMPTY: 0,
  CARRIER: 1,
  BATTLESHIP: 2,
  CRUISER: 3,
  SUBMARINE: 4,
  DESTROYER: 5,
});

const shipLength = Object.freeze({
  1: 5,
  2: 4,
  3: 3,
  4: 3,
  5: 2,
});

const COLOR = Object.freeze({
  0: 'white', // empty
  1: 'red', // hit
  2: 'blue', // miss
  3: 'gray', // sunk
});

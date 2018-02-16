const SIZE = 10;
const GRID_SIZE = 24;

const gridState = {
  EMPTY: 0,
  HIT: 1,
  MISS: 2,
  SUNK: 3,
};

const ships = {
  EMPTY: 0,
  CARRIER: 1,
  BATTLESHIP: 2,
  CRUISER: 3,
  SUBMARINE: 4,
  DESTROYER: 5,
};

const COLOR = {
  0: 'white', // empty
  1: 'red', // hit
  2: 'blue', // miss
  3: 'gray', // sunk
};

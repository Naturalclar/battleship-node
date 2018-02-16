/* global SIZE */

function initMap(size) {
  const array = new Array(size).fill(0);
  array.forEach((val, index) => {
    array[index] = new Array(size).fill(0);
  });
  return array;
}

class Player {
  constructor(name) {
    this.name = name;
    this.map = initMap(SIZE);
    this.state = initMap(SIZE);
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setMap(map) {
    this.map = map;
  }

  getMap(x, y) {
    return this.map[x][y];
  }

  setState(x, y, state) {
    this.state[x][y] = state;
  }

  getStateAtPos(x, y) {
    return this.state[x][y];
  }

  getState() {
    return this.state;
  }

  clear() {
    this.state = initMap(SIZE);
  }
}

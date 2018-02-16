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

  getMap() {
    return this.map;
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

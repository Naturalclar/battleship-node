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

    //state for setup
    this.setUpComplete = false;
    this.setUpRotate = false;
    this.setUpStage = 1;

    //state for game
  }

  getSetUpComplete() {
    return this.setUpComplete;
  }

  getSetUpRotate() {
    return this.setUpRotate;
  }

  getSetUpStage() {
    return this.setUpStage;
  }

  setSetUpComplete(val) {
    this.setUpComplete = val;
  }

  setSetUpRotate(val) {
    this.setUpRotate = val;
  }

  incrementSetUpStage(val) {
    this.setUpStage = this.setUpStage + 1;
  }


  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setMap(x,y, val) {
    this.map[x][y] = val;
  }

  getMap() {
    return this.map;
  }

  getMapAtPos(x, y) {
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
    this.map = initMap(SIZE);
    this.setup = false;
  }
}

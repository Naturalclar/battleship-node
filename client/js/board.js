/* global document */

const SIZE = 10;
const GRID_SIZE = 32;
const COLOR = {
  0: 'white',
  1: 'red',
  2: 'blue',
  3: 'green',
};

function create2DArray(size) {
  const array = new Array(size).fill(0);
  array.forEach((val, index) => {
    array[index] = new Array(size).fill(0);
  });
  return array;
}

class Board {
  /**
   * Board
   * @param {string} id - id of the DOM element
   */
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    this.map = create2DArray(SIZE);
    this.state = create2DArray(SIZE);
    this.x = 0;
    this.y = 0;
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    this.canvas.addEventListener('click', this.onClick.bind(this), false);
  }
  /**
   * getMousePos()
   * - Get the current position of the mouse
   */
  getMousePos(event) {
    const rect = this.canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / GRID_SIZE);
    const y = Math.floor((event.clientY - rect.top) / GRID_SIZE);
    return { x, y };
  }

  /**
   * onClick
   */
  onClick(event) {
    const { x, y } = this.getMousePos(event);
    console.log(x, y);
    this.state[x][y] = 2;
    this.drawTile(x, y, COLOR[this.state[x][y]]);
    console.log(this.state);
  }

  /**
   * onMouseMove()
   * - highlight the tile that is being hovered
   */
  onMouseMove(event) {
    const { x, y } = this.getMousePos(event);
    if (this.x !== x || this.y !== y) {
      this.drawTile(x, y, 'gray');
    }
    this.x = x;
    this.y = y;
  }

  /**
   * drawTile(x,y)
   * - draws a tile at position x, y
   * @param {number} x
   * x coordinate of where it will be drawn
   * @param {number} y
   * y coordinate of where it will be drawn
   */
  drawTile(x, y, color) {
    this.drawGrid();
    const xPos = x * GRID_SIZE;
    const yPos = y * GRID_SIZE;
    this.ctx.clearRect(xPos, yPos, GRID_SIZE, GRID_SIZE);
    this.ctx.fillStyle = color;
    this.ctx.fillRect(xPos, yPos, GRID_SIZE, GRID_SIZE);
    this.ctx.strokeRect(xPos, yPos, GRID_SIZE, GRID_SIZE);
  }
  /**
   * drawGrid()
   * - draws a 10 x 10 grid
  */
  drawGrid() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.state.forEach((val, curX) => {
      val.forEach((state, curY) => {
        this.ctx.fillStyle = COLOR[state];
        this.ctx.fillRect(curX * GRID_SIZE, curY * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        this.ctx.strokeRect(curX * GRID_SIZE, curY * GRID_SIZE, GRID_SIZE, GRID_SIZE);
      });
    });
  }
}

/* global SIZE GRID_SIZE HIT MISS COLOR */

/**
 * create2DArray(size)
 * @param {number} size
 * Initialize an 2D array of given size, filled with 0
 */
function create2DArray(size) {
  const array = new Array(size).fill(0);
  array.forEach((val, index) => {
    array[index] = new Array(size).fill(0);
  });
  return array;
}

/**
 * setMessage(message)
 * @param {string} message
 * set the message text to given message
 */
function setMessage(message) {
  const el = document.getElementById('message');
  el.innerHTML = message;
}

class Board {
  /**
   * Board
   */
  constructor(player) {
    this.player = player;
    this.el = document.createElement('div');
    this.el.className = 'board';
    this.el.innerHTML = '';
    this.x = 0;
    this.y = 0;
    this.init();
  }

  getEl() {
    return this.el;
  }

  init() {
    // Create columns label
    this.columns = document.createElement('ul');
    this.columns.classList.add('board__columns');

    // Create rows label
    this.rows = document.createElement('ul');
    this.rows.classList.add('board__rows');

    // Set Columns Label to be 1 - 10, Set Rows Label to be A-J
    new Array(SIZE).fill(0).forEach((val, index) => {
      const column = document.createElement('li');
      const columnLabel = document.createTextNode((index + 1).toFixed());
      column.appendChild(columnLabel);
      const row = document.createElement('li');
      const rowLabel = document.createTextNode(String.fromCharCode(index + 65));
      row.appendChild(rowLabel);
      this.columns.appendChild(column);
      this.rows.appendChild(row);
    });

    this.el.appendChild(this.columns);
    this.el.appendChild(this.rows);

    // Create Canvas
    this.canvas = document.createElement('canvas');
    this.canvas.classList.add('board__canvas');
    this.canvas.width = 321;
    this.canvas.height = 321;
    this.el.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    // Set Event Listeners
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    this.canvas.addEventListener('mouseout', this.onMouseOut.bind(this), false);
    this.canvas.addEventListener('click', this.onClick.bind(this), false);

    // Render Board
    this.drawGrid();
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
   * onClick()
   */
  onClick(event) {
    const { x, y } = this.getMousePos(event);
    if (this.player.getStateAtPos(x, y) !== 0) {
      setMessage('Already Taken!');
      return;
    }
    if (this.player.getMap(x, y) === HIT) {
      this.player.setState(x, y, HIT);
      setMessage('Hit!');
    } else {
      this.player.setState(x, y, MISS);
      setMessage('Miss!');
    }
    this.drawTile(x, y, COLOR[this.player.getStateAtPos(x, y)]);
  }

  /**
   * onMouseOut()
   * - redraw grid when mouse leaves
   */
  onMouseOut() {
    this.drawGrid();
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
    this.player.getState().forEach((val, curX) => {
      val.forEach((state, curY) => {
        this.ctx.fillStyle = COLOR[state];
        this.ctx.fillRect(curX * GRID_SIZE, curY * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        this.ctx.strokeRect(curX * GRID_SIZE, curY * GRID_SIZE, GRID_SIZE, GRID_SIZE);
      });
    });
  }
}

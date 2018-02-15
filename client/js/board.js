/* global document */

const GRID_SIZE = 32;

//module.exports = 
class Board {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
  }

  /**
   * drawGrid()
   * - draws a 10 x 10 grid
  */
  drawGrid() {
    let x = 0;
    let y = 0;
    const { width, height } = this.canvas;

    while (x < width) {
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x, height);
      this.ctx.stroke();
      x += GRID_SIZE;
    }
    x = 0;
    while (y < height) {
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(width, y);
      this.ctx.stroke();
      y += GRID_SIZE;
    }
  }

  /**
   * drawTile(x,y)
   * - draws a tile at position x, y
   * @param {number} x 
   * x position of where it will be drawn
   * @param {number} y 
   * y position of where it will be drawn
   */
  drawTile(x, y) {
      return -42;
    }
};


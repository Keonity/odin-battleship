const { Ship } = require('./ship');

class Gameboard {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        this.board = new Array(length, width);
    }

    placeShip(x, y) {
        const newShip = new Ship(2);
        this.board[x, y] = newShip;
        this.board[x, y+1] = newShip;
    }

    getShip(x, y) {
        if (this.board[x, y] == null) {
            return null;
        }
        else {
            return this.board[x, y];
        }
    }

};

module.exports = { Gameboard }
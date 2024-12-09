const { Ship } = require('./ship');

class Gameboard {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        this.board = new Array(length);
        for (let i = 0; i < length; i++) {
            this.board[i] = new Array(width);
        }
    }

    placeShip(x, y) {
        const newShip = new Ship(2);
        this.board[x][y] = newShip;
        this.board[x][y + 1] = newShip;
    }

    getShip(x, y) {
        if (this.board[x][y] == null || this.board[x][y] == 0) {
            return null;
        }
        else {
            return this.board[x][y];
        }
    }

    receiveAttack(x, y) {
        if (this.board[x][y] == null || this.board[x][y] == 0) {
            return null;
        }
        else {
            this.board[x][y].hit();
            return this.board[x][y].timesHit;
        }
    }

};

module.exports = { Gameboard }